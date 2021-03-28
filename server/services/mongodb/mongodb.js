const { MongoClient } = require('mongodb');
const { DB_URI, DB_NAME } = require('../../config/mongodb');

const options = { userNewUrlParser: true, useUnifiedTopology: true, };
let _db;

const connectToDb = () => {
    const client = new MongoClient(DB_URI, options);
    client.connect()
        .then(client => {
            _db = client.db(DB_NAME);
            console.log('connected to db');
        })
        .catch(error => { throw error });
};

const getDB = () => _db;

module.exports = {
    connectToDb,
    getDB
};