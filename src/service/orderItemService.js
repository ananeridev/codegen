
export default class OrderItemService {
    constructor({ repository: orderItemRepository }) {
        this.orderItemRepository = orderItemRepository
    }

    create(data) {
        return this.orderItemRepository.create(data) 
    }

    read(query) {
        return this.orderItemRepository.read(query) 
    }

    update(id, data) {
        return this.orderItemRepository.update(id, data) 
    }

    delete(id) {
        return this.orderItemRepository.delete(id) 
    }
}