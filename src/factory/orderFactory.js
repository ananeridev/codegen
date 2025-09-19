
import OrderService from '../service/orderService.js'
import OrderRepository from '../repository/orderRepository.js'

export default class OrderFactory {
    static getInstance() {
        const repository = new OrderRepository()
        const service = new OrderService({ repository })
        return service
    }
}