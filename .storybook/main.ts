import type { StorybookConfig } from "@storybook/react-vite"

type FrameworkOptions = Record<string, any>;

type DocsOptions = {
  autodocs: string,
  docsPage: boolean,
};

type typesConfig = {
  stories: string[],
  framework: {
    name: string,
    options: FrameworkOptions,
  },
  docs: DocsOptions,
  addons: string[]
};

const config: typesConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    docsPage: true,
  },
};

export default config;
