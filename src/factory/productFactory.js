
import PRODUCTService from '../service/pRODUCTService.js'
import PRODUCTRepository from '../repository/pRODUCTRepository.js'

export default class PRODUCTFactory {
    static getInstance() {
        const repository = new PRODUCTRepository()
        const service = new PRODUCTService({ repository })
        return service
    }
}