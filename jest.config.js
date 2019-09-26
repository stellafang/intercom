module.exports = {
    verbose: true,
    collectCoverage: true,
    testPathIgnorePatterns: ['node_modules'],
    collectCoverageFrom: [
        'main.{js,jsx}',
        'utils.{js,jsx}',
        'worker/**/*.{js,jsx}',
        'scripts/generator/*.{js,jsx}',
        '!app/analytics/**/*.{js,jsx}',
        '!app/pages/test-container/**/*.{js,jsx}',
        '!app/main.jsx',
        '!app/loader.js',
        '!app/ssr-loader.js',
        '!app/ssr.js',
        '!app/static/**',
        '!node_modules/**'
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
        }
    }
}
