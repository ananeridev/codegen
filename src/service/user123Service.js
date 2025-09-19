
export default class User123Service {
    constructor({ repository: user123Repository }) {
        this.user123Repository = user123Repository
    }

    create(data) {
        return this.user123Repository.create(data) 
    }

    read(query) {
        return this.user123Repository.read(query) 
    }

    update(id, data) {
        return this.user123Repository.update(id, data) 
    }

    delete(id) {
        return this.user123Repository.delete(id) 
    }
}