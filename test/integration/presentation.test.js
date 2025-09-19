import {
    expect,
    describe,
    test,
    jest,
    beforeEach,
    beforeAll,
    afterAll
} from '@jest/globals'

import yargs from 'yargs'
import { tmpdir } from 'os'
import fsPromises from 'fs/promises'
import { join } from 'path'

describe('#Integration - Presentation Layer (yargs)', () => {
    let tempDir
    let originalProcessArgv
    let originalProcessEnv

    beforeAll(async () => {
        tempDir = await fsPromises.mkdtemp(join(tmpdir(), 'codegen-presentation-'))
        originalProcessArgv = process.argv
        originalProcessEnv = { ...process.env }
    })

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
        process.argv = originalProcessArgv
        process.env = { ...originalProcessEnv }
        
        // Mock process.exit to prevent Jest from being terminated
        jest.spyOn(process, 'exit').mockImplementation((code) => {
            throw new Error(`process.exit(${code})`)
        })
    })

    afterAll(async () => {
        await fsPromises.rm(tempDir, { recursive: true })
    })

    const createYargsParser = (args) => {
        return yargs(args)
            .command('skeleton', 'create project skeleton', (builder) => {
                return builder.option('component-name', {
                    alias: 'c',
                    demandOption: true,
                    describe: 'component\'s name',
                    type: 'array'
                })
                .example('skeleton --component-name product', 'created a project with a single domain')
                .example('skeleton -c product -c person -c colors', 'creates a project with a list of domain')
            })
            .epilogue('created by ananeridev')
    }

    const testYargsParsing = (args) => {
        const parser = createYargsParser(args)
        try {
            return parser.parseSync()
        } catch (error) {
            throw error
        }
    }

    const testYargsParsingWithError = (args) => {
        const parser = createYargsParser(args)
        try {
            return parser.parseSync()
        } catch (error) {
            if (error.message.includes('process.exit')) {
                return { error: 'Validation failed', exitCode: error.message }
            }
            return { error: error.message }
        }
    }

    test('should parse skeleton command with single component name using --component-name', () => {
        const result = testYargsParsing(['skeleton', '--component-name', 'user'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user'])
    })

    test('should parse skeleton command with single component name using -c', () => {
        const result = testYargsParsing(['skeleton', '-c', 'product'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['product'])
    })

    test('should parse skeleton command with multiple component names using -c', () => {
        const result = testYargsParsing(['skeleton', '-c', 'user', '-c', 'product', '-c', 'order'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user', 'product', 'order'])
    })

    test('should parse skeleton command with multiple component names using --component-name', () => {
        const result = testYargsParsing(['skeleton', '--component-name', 'user', '--component-name', 'product'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user', 'product'])
    })

    test('should parse skeleton command with mixed flag usage', () => {
        const result = testYargsParsing(['skeleton', '-c', 'user', '--component-name', 'product'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user', 'product'])
    })

    test('should throw error when skeleton command is called without component-name', () => {
        const result = testYargsParsingWithError(['skeleton'])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should throw error when skeleton command is called with empty component-name', () => {
        const result = testYargsParsingWithError(['skeleton', '--component-name'])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should throw error with invalid command', () => {
        const result = testYargsParsingWithError(['invalid-command'])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should throw error with extra arguments after valid command', () => {
        const result = testYargsParsingWithError(['skeleton', '--component-name', 'user', 'extra-arg'])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should handle component names with special characters', () => {
        const result = testYargsParsing(['skeleton', '-c', 'user-service', '-c', 'product_v2'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user-service', 'product_v2'])
    })

    test('should handle empty string component names', () => {
        const result = testYargsParsingWithError(['skeleton', '-c', ''])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should handle whitespace-only component names', () => {
        const result = testYargsParsingWithError(['skeleton', '-c', '   '])
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('Validation failed')
        expect(result.exitCode).toContain('process.exit(1)')
    })

    test('should handle very long component names', () => {
        const longName = 'a'.repeat(100)
        const result = testYargsParsing(['skeleton', '-c', longName])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual([longName])
    })

    test('should handle component names with numbers', () => {
        const result = testYargsParsing(['skeleton', '-c', 'user123', '-c', 'product-v2'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['user123', 'product-v2'])
    })

    test('should handle case sensitivity in component names', () => {
        const result = testYargsParsing(['skeleton', '-c', 'User', '-c', 'PRODUCT', '-c', 'orderItem'])
        
        expect(result._).toContain('skeleton')
        expect(result.componentName).toEqual(['User', 'PRODUCT', 'orderItem'])
    })

    test('should validate yargs configuration structure', () => {
        const parser = createYargsParser()
        const helpText = parser.getHelp()
        
        expect(helpText).toContain('Commands:')
        expect(helpText).toContain('skeleton')
        expect(helpText).toContain('create project skeleton')
        expect(helpText).toContain('Options:')
        expect(helpText).toContain('created by ananeridev')
    })

    test('should validate skeleton command help structure', () => {
        const parser = createYargsParser()
        const helpText = parser.getHelp()
        
        expect(helpText).toContain('--component-name')
        expect(helpText).toContain('-c')
        expect(helpText).toContain('component\'s name')
        expect(helpText).toContain('Examples:')
    })

    test('should validate that componentName is required', () => {
        const parser = createYargsParser()
        const options = parser.getOptions()
        
        expect(options).toHaveProperty('component-name')
        expect(options['component-name']).toHaveProperty('demandOption', true)
        expect(options['component-name']).toHaveProperty('type', 'array')
    })

    test('should validate alias configuration', () => {
        const parser = createYargsParser()
        const options = parser.getOptions()
        
        expect(options).toHaveProperty('component-name')
        expect(options['component-name']).toHaveProperty('alias', 'c')
    })
})
