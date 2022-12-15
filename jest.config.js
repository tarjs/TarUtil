module.exports = {
  // We always recommend having all TypeScript files in a src folder in your project. We assume this is true and specify this using the roots option.
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest" //The transform config just tells jest to use ts-jest for ts / tsx files.
  },
  "testEnvironment": "jsdom"
};