
const express = require('express');

const router = express.Router();

const SearchController = require('../controllers/search.controller')
 


router.get('/news',SearchController.getNews);


module.exports = router;