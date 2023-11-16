const componentTemplate = require('./src/templates/componentTemplate.js')

module.exports = {
  typescript: true,
  icon: true,
  svgProps: {
    width: "inherit",
    height: "inherit"
  },
  replaceAttrValues: {
    "#00164E": "currentColor"
  },
  plugins: [
    // Clean SVG files using SVGO
    "@svgr/plugin-svgo",
    // Generate JSX
    "@svgr/plugin-jsx",
    // Format the result using Prettier
    "@svgr/plugin-prettier"
  ],
  svgoConfig: {},
  template: componentTemplate
};
