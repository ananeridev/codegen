
export default class DogService {
    constructor({ repository: dogRepository }) {
        this.dogRepository = dogRepository
    }

    create(data) {
        return this.dogRepository.create(data) 
    }

    read(query) {
        return this.dogRepository.read(query) 
    }

    update(id, data) {
        return this.dogRepository.update(id, data) 
    }

    delete(id) {
        return this.dogRepository.delete(id) 
    }
}