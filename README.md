# CodeGen

A powerful code generation tool that creates JavaScript class templates following clean architecture principles and best practices. Built with Test-Driven Development (TDD) and comprehensive integration testing to ensure reliability and maintainability.

<img width="702" height="311" alt="Screenshot 2025-09-18 at 15 43 54" src="https://github.com/user-attachments/assets/a6419ee2-0520-43ab-a4ed-746cc5984b24" />

## Purpose

CodeGen is designed to accelerate development by automatically generating boilerplate code for common architectural patterns in JavaScript applications. It creates a complete project skeleton with:

- **Repository Layer**: Data access abstraction following the Repository pattern
- **Service Layer**: Business logic implementation
- **Factory Layer**: Object creation and dependency injection
- **Clean Architecture**: Separation of concerns and maintainable code structure

The tool is particularly useful for:
- Rapid prototyping of new features
- Maintaining consistent code structure across teams
- Reducing repetitive coding tasks
- Enforcing architectural patterns and best practices

## Features

- **Repository Template**: Generates CRUD repository classes with proper abstraction
- **Service Template**: Creates service layer classes for business logic
- **Factory Template**: Builds factory pattern implementations for dependency injection
- **Utility Functions**: String manipulation and naming convention helpers
- **CLI Interface**: Easy-to-use command-line interface for code generation
- **Test Coverage**: Comprehensive unit and integration tests

## Installation

```bash
npm install
```

## Usage

### Command Line Interface

Generate a complete project skeleton with multiple domains:

```bash
# Development mode (creates files in tmp/ folder)
npm start

# Production mode (creates files in src/ folder)
node src/index.js skeleton -c product -c person -c colors
```

### Programmatic Usage

```javascript
import { repositoryTemplate, serviceTemplate, factoryTemplate } from './src/templates/index.js'

// Generate repository class
const repo = repositoryTemplate('user')
console.log(repo.fileName) // UserRepository
console.log(repo.template) // Generated class code

// Generate service class
const service = serviceTemplate('user')
console.log(service.fileName) // UserService

// Generate factory class
const factory = factoryTemplate('user')
console.log(factory.fileName) // UserFactory
```

## Testing Locally

### Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests with coverage report
npm run test:cov
```

### Test Structure

The project includes comprehensive testing:

- **Unit Tests**: Located in `test/unit/` - Tests individual functions and templates
- **Integration Tests**: Located in `test/integration/` - Tests file creation and layer generation
- **Mock Files**: Located in `test/unit/mocks/` and `test/integration/mocks/` - Test fixtures and sample data

### Test Commands Explained

- `npm test`: Runs Jest in watch mode with experimental VM modules support
- `npm run test:cov`: Generates a coverage report showing test coverage statistics

### Development Workflow

1. **Install dependencies**: `npm install`
2. **Run tests**: `npm test` (in watch mode for development)
3. **Generate code**: `npm start` (for development) or use CLI directly
4. **Check coverage**: `npm run test:cov`

### Test Configuration

The project uses Jest with ES modules support. The configuration is defined in `jest.config.mjs` and includes:
- ES modules support via `NODE_OPTIONS=--experimental-vm-modules`
- Coverage reporting
- Watch mode for development

## Project Structure

```
src/
├── templates/          # Code generation templates
├── createFiles.js     # File creation logic
├── createLayers.js    # Layer structure creation
├── util.js           # Utility functions
└── index.js          # CLI entry point

test/
├── unit/             # Unit tests
├── integration/      # Integration tests
└── mocks/           # Test fixtures
```

## License

ISC
