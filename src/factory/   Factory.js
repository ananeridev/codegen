
import    Service from '../service/   Service.js'
import    Repository from '../repository/   Repository.js'

export default class    Factory {
    static getInstance() {
        const repository = new    Repository()
        const service = new    Service({ repository })
        return service
    }
}