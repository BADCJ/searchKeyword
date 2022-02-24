
const axios = require('axios');
const { newsApi } = require('../config');
const searchHistoryDao = require('../dao/searchHistory.dao');

class SearchService{

    async callNewsApi (keyword) {

        try{
            const result = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-01-24&sortBy=publishedAt&apiKey=${newsApi.apiKey}`);
            let { data } = result;
            return { ...data , keyword }
        }
        catch(e){
            throw new Error(e)
        }

    }

    async searchNews (keyword) {

        try{

            // ? search in history first
            let history = await searchHistoryDao.findOne({keyword});

            // ? if found return from history
            if( history ){
                return {
                    dataSource:"DATABASE",
                    history
                };
            }

            // ? If not found , go to api
            let result = await this.searchAndcreateSearchHistory(keyword);

            return {
                dataSource:"NEWS_API",
                result
            };

        }
        catch ( e ) {
            throw new Error(e);
        }

    }

    async searchAndcreateSearchHistory (keyword) {
        const result = await this.callNewsApi(keyword);
        return await searchHistoryDao.create(result);
    }

    async findSearchHistory (criteria) {
        return await searchHistoryDao.find(criteria);
    }

    async findOneSearchHistory (criteria) {
        return await searchHistoryDao.findOne(criteria);
    }

}

module.exports = new SearchService();