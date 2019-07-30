const config = {};

config.port = process.env.PORT || 5000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://yeet:@cluster0-bxfke.mongodb.net/test?retryWrites=true&w=majority";

module.exports = config;
