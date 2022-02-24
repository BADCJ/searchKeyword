
const config = require(`./config.${process.env.NODE_ENV.trim()}.json`);

console.log(`Initialising app on ${process.env.NODE_ENV.trim()} configuration`);

module.exports = config;