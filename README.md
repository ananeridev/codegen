# CodeGen

A simple code generation tool for creating JavaScript class templates.

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
