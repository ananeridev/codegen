
import Extra-argService from '../service/extra-argService.js'
import Extra-argRepository from '../repository/extra-argRepository.js'

export default class Extra-argFactory {
    static getInstance() {
        const repository = new Extra-argRepository()
        const service = new Extra-argService({ repository })
        return service
    }
}