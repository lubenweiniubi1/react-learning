/* config-overrides.js */
 
// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }

const { override, addDecoratorsLegacy ,disableEsLint} = require("customize-cra")

module.exports = override(addDecoratorsLegacy())
