
export default class CatService {
    constructor({ repository: catRepository }) {
        this.catRepository = catRepository
    }

    create(data) {
        return this.catRepository.create(data) 
    }

    read(query) {
        return this.catRepository.read(query) 
    }

    update(id, data) {
        return this.catRepository.update(id, data) 
    }

    delete(id) {
        return this.catRepository.delete(id) 
    }
}