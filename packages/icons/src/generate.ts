import path from 'path'
import fs from 'fs-extra'
import chalk from 'chalk'
import dotenv from 'dotenv'
import {createIndex, downloadSVGsData, svgUrlGenerator, toPascalCase} from './utils'
import svgrConfig from '../svgr.config'
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const svgr = require('@svgr/core').default

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, './icons/components')
const SVG_DIRECTORY_PATH = path.resolve(__dirname, './icons/svgs')
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, './icons')

dotenv.config()

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
  console.error('Environment Variables not set.')
  process.exit(1)
}

const options: AxiosRequestConfig = {
  method: 'GET',
  url: `${FIGMA_URL_BASE}files/${FIGMA_FILE_ID}`,
  headers: { 'X-Figma-Token': FIGMA_API_TOKEN }
};

console.log(chalk.red('-> Important, this process can be time-consuming'))

console.log(chalk.magentaBright('-> Fetching icons metadata'))
axios.request(options)
.then( async (response: AxiosResponse<any>) => {
  const { document } = response.data

  const FilterIcon = document.children.filter(({name}) => name.includes("Ícones"))[0]

  // const filteredNames = ["Países", "Taças", "Food", "Essential", "Wine", "Ecommerce", "Social","Elemento suporte"];

  // const filteredNames = ["Elemento suporte","Essential"]

  const filteredNames = ["Ecommerce"]

  const Filterpername = FilterIcon.children.filter(item => filteredNames.includes(item.name));

  const nameAndId = Filterpername.map(item => {
    return item.children.map(({ name, id }) => ({ id, name }))
  }).flat();

    console.log(chalk.blueBright('-> Downloading SVG code'))
    const geradorUrlMetadata = await svgUrlGenerator(nameAndId)
    const downloadedSVGsData = await downloadSVGsData(geradorUrlMetadata)

    console.log(chalk.blueBright('-> Reading manually added SVGs'))
    const manuallyAddedSvgs: { data: string; name: string }[] = []
    const svgFiles = fs
      .readdirSync(SVG_DIRECTORY_PATH)
      .filter((item) => !/(^|\/)\.[^/.]/g.test(item))
    svgFiles.forEach((fileName) => {
      const svgData = fs.readFileSync(
        path.resolve(SVG_DIRECTORY_PATH, fileName),
        'utf-8',
      )
      manuallyAddedSvgs.push({
        data: svgData,
        name: toPascalCase(fileName.replace(/svg/i, '')),
      })
    })
    const allSVGs = [...downloadedSVGsData, ...manuallyAddedSvgs]

    console.log(chalk.cyanBright('-> Converting to React components'))
    allSVGs.forEach((svg) => {
      const svgCode = svg?.data
      const componentName = toPascalCase(svg?.name)
      const componentFileName = `${componentName}.tsx`

      const componentCode = svgr.sync(svgCode, svgrConfig, { componentName })

      fs.ensureDirSync(ICONS_DIRECTORY_PATH)
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode,
      )
    })

    console.log(chalk.yellowBright('-> Generating index file'))
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      indexFileName: 'index.tsx',
    })

    console.log(chalk.greenBright('-> All done! ✅'))

})
.catch((error) => {
  console.error(error);
});
