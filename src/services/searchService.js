
const axios = require('axios');
const { newsApi } = require('../config');
const searchHistoryDao = require('../dao/searchHistory.dao');
const logService = require('./loggerService');
const CheckedException = require('../exceptions/checked.exception')

class SearchService{

    async callNewsApi (keyword) {

        logService.localModelogInfo(`Searching news api for keyword =>`,keyword);
        logService.localModelogInfo(`using api key`,newsApi.apiKey);

        try{
            const result = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-01-24&sortBy=publishedAt&apiKey=${newsApi.apiKey}`);
            let { data } = result;
            logService.localModelogInfo(`result of search from api =>`,data);
            return { ...data , keyword }
        }
        catch(e){
            let { response } = e;
            let { data } = response;
            let { status , code , message } = data;
            throw new CheckedException(code,message,status);
        }

    }

    async searchNews (keyword) {

        try{

            logService.localModelogInfo(`reached searchNews in search service with keyword => `,keyword);

            // ? search in history first
            let history = await searchHistoryDao.findOne({keyword});

            // ? if found return from history
            if( history ){
                logService.localModelogInfo(`history found in database , sending the data =>`,history);
                return {
                    dataSource:"DATABASE",
                    history
                };
            }

            logService.localModelogInfo(`history not found in database , preparing to get the data from news api`);

            // ? If not found , go to api
            let result = await this.searchAndcreateSearchHistory(keyword);

            return {
                dataSource:"NEWS_API",
                result
            };

        }
        catch ( e ) {
            
            const { code , err , msg } = e;

            logService.localModelogError(`code = [${code}] , err = [${err}] , msg = [${msg}]`);

            return {
                ...e
            }
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