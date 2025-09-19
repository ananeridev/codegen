
export default class Product-v2Service {
    constructor({ repository: product-v2Repository }) {
        this.product-v2Repository = product-v2Repository
    }

    create(data) {
        return this.product-v2Repository.create(data) 
    }

    read(query) {
        return this.product-v2Repository.read(query) 
    }

    update(id, data) {
        return this.product-v2Repository.update(id, data) 
    }

    delete(id) {
        return this.product-v2Repository.delete(id) 
    }
}