
const searchHistoryRepository = require('../models/searchHistory.model')



class SearchHistoryDao {

    async create(data){
        return await searchHistoryRepository.create(data);
    }

    async findOne(criteria){
        return await searchHistoryRepository.findOne(criteria?criteria:{});
    }

    async find(criteria){
        return await searchHistoryRepository.find(criteria?criteria:{});
    }

}

module.exports = new SearchHistoryDao();