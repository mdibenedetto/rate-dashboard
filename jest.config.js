module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  verbose: true,
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
};
