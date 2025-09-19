
export default class Extra-argService {
    constructor({ repository: extra-argRepository }) {
        this.extra-argRepository = extra-argRepository
    }

    create(data) {
        return this.extra-argRepository.create(data) 
    }

    read(query) {
        return this.extra-argRepository.read(query) 
    }

    update(id, data) {
        return this.extra-argRepository.update(id, data) 
    }

    delete(id) {
        return this.extra-argRepository.delete(id) 
    }
}