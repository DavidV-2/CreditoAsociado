module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/packages/application'],
  modulePathIgnorePatterns: ["<rootDir>/packages/application/package.json"],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: false, 
      tsconfig: {
        module: 'commonjs',
        target: 'es2020',
        esModuleInterop: true,
        moduleResolution: 'node' 
      }
    }],
  },
};