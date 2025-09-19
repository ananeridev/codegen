
import OrderItemService from '../service/orderItemService.js'
import OrderItemRepository from '../repository/orderItemRepository.js'

export default class OrderItemFactory {
    static getInstance() {
        const repository = new OrderItemRepository()
        const service = new OrderItemService({ repository })
        return service
    }
}