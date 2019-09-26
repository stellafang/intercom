module.exports = {
    verbose: true,
    collectCoverage: true,
    testPathIgnorePatterns: ['node_modules'],
    collectCoverageFrom: [
        'utils.{js}',
    ],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
}
