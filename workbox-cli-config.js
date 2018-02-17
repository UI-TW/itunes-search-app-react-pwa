module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{js,png,ico,svg,html,css,json}"
  ],
  "swSrc": "src/sw.js",
  "swDest": "dist/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
