import {
    expect,
    describe,
    test,
    jest,
    beforeEach
} from '@jest/globals'

import { createLayersIfNotExists } from '../../src/createLayers.js'
import fsPromises from 'fs/promises'
import fs from 'fs'

describe('#Layers - Folder structure', () => {
    const defaultLayers = ['repository', 'service', 'factory']
    
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test('should create folders if it doesnt exists', async () => {
        jest.spyOn(fsPromises, fsPromises.mkdir.name).mockResolvedValue()
        jest.spyOn(fs, fs.existsSync.name).mockReturnValue(false)

        await createLayersIfNotExists({ mainPath: '', layers: defaultLayers})

        expect(fs.existsSync).toHaveBeenCalledTimes(defaultLayers.length)
        expect(fsPromises.mkdir).toHaveBeenCalledTimes(defaultLayers.length)

    }) 
    test('should not create folders if it exists', async () => {
        jest.spyOn(fsPromises, fsPromises.mkdir.name).mockResolvedValue()
        jest.spyOn(fs, fs.existsSync.name).mockReturnValue(true)

        await createLayersIfNotExists({ mainPath: '', layers: defaultLayers})

        expect(fs.existsSync).toHaveBeenCalledTimes(defaultLayers.length)
        expect(fsPromises.mkdir).not.toHaveBeenCalled()
    }) 

})