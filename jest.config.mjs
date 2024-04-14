import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./"
});

const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(test).+(ts|tsx|js)"],

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: ["/node_modules/"],

  coverageProvider: "babel",
  moduleNameMapper: {
    "^~/app/(.*)$": "<rootDir>/src/app/$1",
    "^~/page/(.*)$": "<rootDir>/src/page/$1",
    "^~/widget/(.*)$": "<rootDir>/src/widget/$1",
    "^~/feature/(.*)$": "<rootDir>/src/feature/$1",
    "^~/entities/(.*)$": "<rootDir>/src/entities/$1",
    "^~/shared/(.*)$": "<rootDir>/src/shared/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  fakeTimers: {
    enableGlobally: false
  },
  roots: ["<rootDir>"],

  testEnvironment: "jest-environment-jsdom",

  testPathIgnorePatterns: ["/node_modules/"],

  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"]
};

export default createJestConfig(config);
