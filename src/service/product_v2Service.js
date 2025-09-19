
export default class Product_v2Service {
    constructor({ repository: product_v2Repository }) {
        this.product_v2Repository = product_v2Repository
    }

    create(data) {
        return this.product_v2Repository.create(data) 
    }

    read(query) {
        return this.product_v2Repository.read(query) 
    }

    update(id, data) {
        return this.product_v2Repository.update(id, data) 
    }

    delete(id) {
        return this.product_v2Repository.delete(id) 
    }
}