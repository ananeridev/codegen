
import User123Service from '../service/user123Service.js'
import User123Repository from '../repository/user123Repository.js'

export default class User123Factory {
    static getInstance() {
        const repository = new User123Repository()
        const service = new User123Service({ repository })
        return service
    }
}