
import CatService from '../service/catService.js'
import CatRepository from '../repository/catRepository.js'

export default class CatFactory {
    static getInstance() {
        const repository = new CatRepository()
        const service = new CatService({ repository })
        return service
    }
}