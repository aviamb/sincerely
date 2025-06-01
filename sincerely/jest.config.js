// jest.config.js
module.exports = {
  projects: [
    {
      displayName: 'unit',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/app/hooks/**/*.test.tsx'],
    },
    {
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/app/components/**/*.test.tsx'],
      setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      transformIgnorePatterns: [
        '/node_modules/(?!lucide-react|firebase).+\\.js$',
      ],      
    },
  ],
};
