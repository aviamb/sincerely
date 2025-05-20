module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // Changed from 'node' to 'jsdom'
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // for TypeScript files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!firebase|some-other-library).+\\.js$', // Add firebase to transform it
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  forceExit: true,  // Force Jest to exit after tests
  detectOpenHandles: true,  // Detect open async handles
};
