
export default class User-serviceService {
    constructor({ repository: user-serviceRepository }) {
        this.user-serviceRepository = user-serviceRepository
    }

    create(data) {
        return this.user-serviceRepository.create(data) 
    }

    read(query) {
        return this.user-serviceRepository.read(query) 
    }

    update(id, data) {
        return this.user-serviceRepository.update(id, data) 
    }

    delete(id) {
        return this.user-serviceRepository.delete(id) 
    }
}