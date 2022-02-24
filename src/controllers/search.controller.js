
const searchService = require('../services/searchService')

class SearchController {


    async getNews (req,res) {

        const { query } = req ;
        const { keyword } = query ;

        const data = await searchService.searchNews(keyword);

        return res.status(data.code?data.code:200).json({
            status: data.code?data.code:200,
            data
        });

    }

}


module.exports = new SearchController();