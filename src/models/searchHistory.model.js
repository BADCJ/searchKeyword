
const mongoose = require('mongoose');
const { Schema } = mongoose;

const articlesSchema = new Schema({

    source : {
        id : { type : String },
        name : { type : String }
    },
    author : { type : String },
    title : { type : String },
    description : { type : String },
    url : { type : String },
    urlToImage : { type : String },
    publishedAt : { type : String },
    content : { type : String }

},{_id:false})

const searchHistorySchema = new Schema({

    keyword : {
        type : String,
        unique : true
    },
    totalResults: {
        type : Number
    },
    articles: {
        type : [articlesSchema]
    },

},{timestamps:true});

const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

module.exports = SearchHistory;