
import BirdService from '../service/birdService.js'
import BirdRepository from '../repository/birdRepository.js'

export default class BirdFactory {
    static getInstance() {
        const repository = new BirdRepository()
        const service = new BirdService({ repository })
        return service
    }
}