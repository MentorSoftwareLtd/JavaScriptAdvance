var express = require('express');
var router = express.Router();
require('../lib/dbs')(function(err,db){
    console.log('Connect',db);
});


var people = [
    {'fn': 'Mirek', 'ln' : 'Dylag'}
];
///api/people
router.get('/people', function(req, res) {
    res.json(people);
});

//api/add
router.post('/add', function(req, res) {
    console.log(req.body);
    if (req.body.fn && req.body.ln) {
        res.status(201).json({});
        people.push(req.body);
    } else {
        res.status(204).json({});
    }

});

module.exports = router;
