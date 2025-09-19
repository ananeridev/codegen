
import UserService from '../service/userService.js'
import UserRepository from '../repository/userRepository.js'

export default class UserFactory {
    static getInstance() {
        const repository = new UserRepository()
        const service = new UserService({ repository })
        return service
    }
}