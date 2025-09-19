
export default class    Service {
    constructor({ repository:    Repository }) {
        this.   Repository =    Repository
    }

    create(data) {
        return this.   Repository.create(data) 
    }

    read(query) {
        return this.   Repository.read(query) 
    }

    update(id, data) {
        return this.   Repository.update(id, data) 
    }

    delete(id) {
        return this.   Repository.delete(id) 
    }
}