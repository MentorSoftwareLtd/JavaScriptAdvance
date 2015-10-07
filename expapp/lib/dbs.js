
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
var db;
module.exports = function(callback) {
    if (!db) {
        MongoClient.connect(url, function (err, db) {

            if (err) {
                console.log('Mongo Server error', err);
            } else {
                console.log('Mongo server connected');
            }
            db = db;
            callback(err, db);
        });
    }
};
