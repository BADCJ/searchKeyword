
const searchService = require('../services/searchService')

class SearchController {


    async getNews (req,res) {

        const { query } = req ;
        const { keyword } = query ;

        const data = await searchService.searchNews(keyword);

        return res.json({
            data
        });

    }

}


module.exports = new SearchController();