
export default class Service {
    constructor({ repository: repository }) {
        this.repository = repository
    }

    create(data) {
        return this.repository.create(data) 
    }

    read(query) {
        return this.repository.read(query) 
    }

    update(id, data) {
        return this.repository.update(id, data) 
    }

    delete(id) {
        return this.repository.delete(id) 
    }
}