var express = require('express');
var router = express.Router();
var dbs = require('../lib/dbs');


///api/people
router.get('/people', function(req, res) {
    dbs(function(err, db) {
        var collection = db.collection('people');
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                res.status(403).json({});
            } else {
                console.log('Data', docs);
                res.json(docs);
            }
        });

    });
});

//api/add
router.post('/add', function(req, res) {
    if (req.body.fn && req.body.ln) {
        dbs(function(err, db) {
            var collection = db.collection('people');
            // Insert some documents
            collection.insertOne(req.body,function(err, result) {
                console.log(result);
                if (err) {
                    res.status(403).json({});
                } else {
                    res.status(201).json({});
                }
            });
        });

    } else {
        res.status(204).json({});
    }

});

module.exports = router;
