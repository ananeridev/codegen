export default `
import ProductService from '../service/productService.js'
import ProductRepository from '../service/productRepository.js'

export default class ProductFactory {
    static getInstance() {
        const repository = new ProductRepository()
        const service = new ProductService({ repository })
        return service
    }
}`