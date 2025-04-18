/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jest-fixed-jsdom",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};