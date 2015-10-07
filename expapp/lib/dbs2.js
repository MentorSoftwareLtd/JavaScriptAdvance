
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var url = 'mongodb://localhost:27017/myproject';
var mongoclient = new MongoClient(new Server(url, 27017), {native_parser: true});
// Use connect method to connect to the Server
module.exports = mongoclient;