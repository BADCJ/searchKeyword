
const express = require('express');
const morgan = require('morgan');

const { DBCONNECTIONS } = require('./src/connections');

const AppConfig = require('./src/config');

const { port } = AppConfig;

const app = express();

const routes = require('./src/routes');

const logService = require('./src/services/loggerService')

const globalPrefix = `/app/v${AppConfig.version}`

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(globalPrefix,routes);



app.listen( port , async() => {

    // ? connect the required databases
    await DBCONNECTIONS.connectToDb();

    logService.logInfo(`Listen server on http://0.0.0.0:${port}${`/app/v${AppConfig.version}`}/`);

});