import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

console.log('hideBin function:', typeof hideBin)
console.log('hideBin result:', hideBin(['node', 'test.js', 'skeleton', '-c', 'user']))

// Test yargs parsing
const result = yargs(hideBin(['node', 'test.js', 'skeleton', '-c', 'user']))
    .command('skeleton', 'create project skeleton', (builder) => {
        return builder.option('component-name', {
            alias: 'c',
            demandOption: true,
            describe: 'component\'s name',
            type: 'array'
        })
    })
    .parseSync()

console.log('Parsed result:', result)
