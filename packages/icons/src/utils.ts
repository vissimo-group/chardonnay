import axios, {AxiosRequestConfig} from "axios";
import os from "os";
import fs from "fs-extra";
import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });

const { FIGMA_API_TOKEN } = process.env
const { FIGMA_FILE_ID } = process.env
const { FIGMA_CANVAS } = process.env
const { FIGMA_URL_BASE } = process.env

if (
    !FIGMA_API_TOKEN ||
    !FIGMA_FILE_ID ||
    !FIGMA_CANVAS ||
    FIGMA_API_TOKEN === 'NOT SET'
) {
    console.error('ERROR: Environment Variables not set.')
    process.exit(1)
}

const options: AxiosRequestConfig = {
    headers: { 'X-Figma-Token': FIGMA_API_TOKEN }
};

interface DataItem {
    id: string;
    name: string;
    url?: string | any;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Receives an array with id and name and searches for the icon url
 */

export const svgUrlGenerator = async (data: DataItem[]) => {
    try {
        const results: (DataItem)[] = [];

        for (const dataItem of data) {
            let response;
            let attempt = 0;

            while (attempt < 3) {
                try {
                    response = await axios.get(`${FIGMA_URL_BASE}images/${FIGMA_FILE_ID}?ids=${dataItem.id}&format=svg`, options);
                    const { images } = response.data;

                    results.push({
                        ...dataItem,
                        url: Object.values(images)[0],
                    });

                    break;
                } catch (error) {
                    if (error.response && error.response.status === 429) {
                        await delay(2000);
                        attempt++;
                    } else {
                        throw error;
                    }
                }
            }
        }

        return results;
    } catch (error) {
        throw error;
    }
};


/**
 * Download SVG data from given array of objects containing url
 */
export const downloadSVGsData = async <T extends {}>(
    data: DataItem[]
) => {
  return Promise.all(
      data.map(async (dataItem) => {
        const downloadedSvg = await axios.get<string>(dataItem.url);
        return {
          ...dataItem,
          data: downloadedSvg.data
        };
      })
  );
};

/**
 * Converts string to PascalCase
 */
export const toPascalCase = (str: string) => {
  return `${str}`
      .replace(/[-_]+/g, " ")
      .replace(/[^\w\s]/g, "")
      .replace(
          /\s+(.)(\w*)/g,
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(/\w/, (s) => s.toUpperCase());
};

export const createIndex = ({
      componentsDirectoryPath,
      indexDirectoryPath,
      indexFileName
    }: {
  componentsDirectoryPath: string;
  indexDirectoryPath: string;
  indexFileName: string;
}) => {
  let indexContent = "";
  fs.readdirSync(componentsDirectoryPath).forEach((componentFileName) => {
    const componentName = toPascalCase(
        componentFileName.substr(0, componentFileName.indexOf(".")) ||
        componentFileName
    );

    const relativePathToComponent = path.relative(
        indexDirectoryPath,
        path.resolve(componentsDirectoryPath, componentName)
    );

    const componentExport = `export { default as ${componentName} } from "./${relativePathToComponent}";`;

    indexContent += componentExport + os.EOL;
  });

  fs.writeFileSync(
      path.resolve(indexDirectoryPath, indexFileName),
      indexContent
  );
};
