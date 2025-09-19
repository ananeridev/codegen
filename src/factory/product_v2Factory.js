
import Product_v2Service from '../service/product_v2Service.js'
import Product_v2Repository from '../repository/product_v2Repository.js'

export default class Product_v2Factory {
    static getInstance() {
        const repository = new Product_v2Repository()
        const service = new Product_v2Service({ repository })
        return service
    }
}