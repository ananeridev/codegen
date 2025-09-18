
export default class BirdService {
    constructor({ repository: birdRepository }) {
        this.birdRepository = birdRepository
    }

    create(data) {
        return this.birdRepository.create(data) 
    }

    read(query) {
        return this.birdRepository.read(query) 
    }

    update(id, data) {
        return this.birdRepository.update(id, data) 
    }

    delete(id) {
        return this.birdRepository.delete(id) 
    }
}