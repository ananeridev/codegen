/*
 * For a detailed explanation regarding each configuration property, visit:
 */

export default {
    testEnvironment: "node",
    transform: {},
    extensionsToTreatAsEsm: ['.js'],
    globals: {
        'ts-jest': {
            useESM: true
        }
    },
    moduleNameMapping: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    collectCoverageFrom: [
      "src/**/*.js",
      "!src/index.js"
    ],
     coverageThreshold: {
       global: {
         branch: 100,
         functions: 100,
         lines: 100,
         statements:100
       }
     },
   
    maxWorkers: "50%",
    watchPathIgnorePatterns: [
      "node_modules"
    ],
    transformIgnorePatterns: ["node_modules"]
  };