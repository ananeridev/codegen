
export default class PRODUCTService {
    constructor({ repository: pRODUCTRepository }) {
        this.pRODUCTRepository = pRODUCTRepository
    }

    create(data) {
        return this.pRODUCTRepository.create(data) 
    }

    read(query) {
        return this.pRODUCTRepository.read(query) 
    }

    update(id, data) {
        return this.pRODUCTRepository.update(id, data) 
    }

    delete(id) {
        return this.pRODUCTRepository.delete(id) 
    }
}