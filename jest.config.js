module.exports = {
  browser: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  roots: ['<rootDir>/src'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  snapshotSerializers: ['jest-serializer-html']
}
