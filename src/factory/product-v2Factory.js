
import Product-v2Service from '../service/product-v2Service.js'
import Product-v2Repository from '../repository/product-v2Repository.js'

export default class Product-v2Factory {
    static getInstance() {
        const repository = new Product-v2Repository()
        const service = new Product-v2Service({ repository })
        return service
    }
}