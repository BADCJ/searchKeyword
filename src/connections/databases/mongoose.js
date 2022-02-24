
const mongoose = require('mongoose');
const { databases } = require('../../config');
const { mongodb } = databases ;

class MongooseConnection {

    async connectToDb(){

        const { client , host , port , db_name } = mongodb;

        const connectionString = `${client}://${host}:${port}/${db_name}`

        console.log(`Using Mongo Connection String => `,connectionString);
        
        try{
            await mongoose.connect(connectionString||'mongodb://localhost:27017/IdeaUsherTask');
        } catch(e) {
            throw new Error('"Error in connecting to DB');
        } finally {
            console.log("Connected to MongoDB");
            return true;
        }
        
    }

}

module.exports = new MongooseConnection();