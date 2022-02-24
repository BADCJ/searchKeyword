
const { environment } = require('../config');

class LogService {

    logInfo(message, ...optionalParams){
        console.info(`[${new Date().toISOString()}] ${message}`,...optionalParams)
    }

    localModelogInfo(message, ...optionalParams){
        if(environment==='local'){
            console.info(`[${new Date().toISOString()}] ${message}`,...optionalParams)
        }
    }

    logWarn(message, ...optionalParams){
        console.warn(`[${new Date().toISOString()}] ${message}`,...optionalParams)
    }

    localModelogWarn(message, ...optionalParams){
        if(environment==='local'){
            console.warn(`[${new Date().toISOString()}] ${message}`,...optionalParams)
        }
    }

    logError(message, ...optionalParams){
        console.warn(`[${new Date().toISOString()}] ${message}`,...optionalParams)
    }

    localModelogError(message, ...optionalParams){
        if(environment==='local'){
            console.error(`[${new Date().toISOString()}] ${message}`,...optionalParams)
        }
    }

}

module.exports = new LogService();