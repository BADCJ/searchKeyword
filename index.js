
const express = require('express');
const morgan = require('morgan');

const { DBCONNECTIONS } = require('./src/connections');

const AppConfig = require('./src/config');

const { port } = AppConfig;

const app = express();

const routes = require('./src/routes');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/app/v1',routes);



app.listen( port , async() => {

    await DBCONNECTIONS.connectToDb();

    console.log(`Listen server on http://0.0.0.0:${port}`);

});


// api key = adb22ea254644bd29761e3a22e486076
// https://newsapi.org/v2/everything?q=tesla&from=2022-01-24&sortBy=publishedAt&apiKey=API_KEY