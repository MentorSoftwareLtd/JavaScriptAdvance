/**
 * Created by mdylag on 07/10/15.
 */
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('people');
    // Insert some documents
    collection.insertOne({fn : 1, ln: 1},
        function(err, result) {
            assert.equal(err, null);
            console.log("Inserted 3 documents into the document collection");
            callback(result);
    });
};

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('people');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.dir(docs);
        callback(docs);
    });
}


// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db, function() {
        findDocuments(db, function() {
            db.close();
        });

    });
});

