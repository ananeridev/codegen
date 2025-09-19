
import Service from '../service/service.js'
import Repository from '../repository/repository.js'

export default class Factory {
    static getInstance() {
        const repository = new Repository()
        const service = new Service({ repository })
        return service
    }
}