const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/chadlei/Desktop/chad-lei-port/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chadlei/Desktop/chad-lei-port/src/pages/404.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/chadlei/Desktop/chad-lei-port/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chadlei/Desktop/chad-lei-port/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/chadlei/Desktop/chad-lei-port/src/pages/privacy.js")))
}

