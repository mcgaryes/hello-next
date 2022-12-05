const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/elements/(.*)': '<rootDir>/src/components/elements/$1',
        '^@/layouts/(.*)': '<rootDir>/src/components/layouts/$1',
        '^@/modules/(.*)': '<rootDir>/src/components/modules/$1',
        '^@/templates/(.*)': '<rootDir>/src/components/templates/$1',
        '^@/pages/(.*)': '<rootDir>/src/pages/$1',
        '^@/hooks/(.*)': '<rootDir>/src/hooks/$1',
        '^@/services/(.*)': '<rootDir>/src/services/$1',
        '^@/context/(.*)': '<rootDir>/src/context/$1',
        '^@/types/(.*)': '<rootDir>/src/types/$1',
        '^@/utilities/(.*)': '<rootDir>/src/utilities/$1'

    },
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
