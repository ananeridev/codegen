# CodeGen

A simple code generation tool for creating JavaScript class templates through good practices by using TDD and integration tests.

<img width="702" height="311" alt="Screenshot 2025-09-18 at 15 43 54" src="https://github.com/user-attachments/assets/a6419ee2-0520-43ab-a4ed-746cc5984b24" />


## Features

- **Repository Template**: Generates CRUD repository classes
- **Service Template**: Creates service layer classes  
- **Factory Template**: Builds factory pattern implementations
- **Utility Functions**: String manipulation helpers

## Usage

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

## Installation

```bash
npm install
```

## Testing

```bash
npm test
```

## License

ISC
# codegen
