module.exports = {
  "presets": [
    ["@babel/preset-env", { "modules": "umd", "targets": { "browsers": ["last 2 versions"] } }],
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
        ["transform-react-remove-prop-types", { "mode": "remove" }],
        ["jsx-remove-data-test-id", { "attributes": ["data-testid"] }]
      ]
    }
  }
}
