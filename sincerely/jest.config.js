// jest.config.js
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  // Tell `next/jest` where your Next.js app root is:
  dir: './',
});

const customJestConfig = {
  // 1) Run everything under a jsdom‐like environment (hooks + components both work fine here).
  testEnvironment: 'jsdom',

  // 2) Look for any *.test.tsx under hooks/ or components/:
  testMatch: [
    '<rootDir>/src/app/hooks/**/*.test.tsx',
    '<rootDir>/src/app/components/**/*.test.tsx',
  ],

  // 3) Mock CSS imports, and map "@/…" → "<rootDir>/src/…":
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^lucide-react/dynamic$': 'lucide-react', // hack for lucide‐react’s “dynamic” import
  },

  // 4) By default, Jest ignores node_modules. We want to “un‐ignore” firebase & lucide‐react
  //    so that SWC can compile their ESM/JSX code. Everything else in node_modules is still ignored.
  transformIgnorePatterns: [
    '/node_modules/(?!(firebase|lucide-react)/)',
  ],

  // 5) After jsdom is set up, load any globals (e.g. jest-dom matchers):
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  // 6) Recognize .ts/.tsx/.js/.jsx/.json files as modules:
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

module.exports = createJestConfig(customJestConfig);
