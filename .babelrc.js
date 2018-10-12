module.exports = {
  "presets": [
    ["@babel/preset-env", { "modules": "umd", "targets": { "esmodules": true } }],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-destructuring",
    "@babel/plugin-proposal-object-rest-spread"
  ],
  "env": {
    "production": {
      "plugins": [
        ["transform-react-remove-prop-types", { "mode": "remove" }]
      ]
    }
  }
}
