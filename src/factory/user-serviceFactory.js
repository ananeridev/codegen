
import User-serviceService from '../service/user-serviceService.js'
import User-serviceRepository from '../repository/user-serviceRepository.js'

export default class User-serviceFactory {
    static getInstance() {
        const repository = new User-serviceRepository()
        const service = new User-serviceService({ repository })
        return service
    }
}