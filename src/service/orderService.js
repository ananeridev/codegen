
export default class OrderService {
    constructor({ repository: orderRepository }) {
        this.orderRepository = orderRepository
    }

    create(data) {
        return this.orderRepository.create(data) 
    }

    read(query) {
        return this.orderRepository.read(query) 
    }

    update(id, data) {
        return this.orderRepository.update(id, data) 
    }

    delete(id) {
        return this.orderRepository.delete(id) 
    }
}