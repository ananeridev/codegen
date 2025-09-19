
export default class UserService {
    constructor({ repository: userRepository }) {
        this.userRepository = userRepository
    }

    create(data) {
        return this.userRepository.create(data) 
    }

    read(query) {
        return this.userRepository.read(query) 
    }

    update(id, data) {
        return this.userRepository.update(id, data) 
    }

    delete(id) {
        return this.userRepository.delete(id) 
    }
}