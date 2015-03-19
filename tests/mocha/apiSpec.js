var request = require('supertest');
var app = require('../../app');


describe('/api', function () {
    var mock;
    beforeEach(function (done) {
        //app = express();

        app.on('start', done);
        app.on('start',function() {
            console.log('start');
        })

        mock = app.listen(1337);
        done();
    });

    afterEach(function (done) {
        mock.close(done);
    });


    it('should return all people', function (done) {
        request(mock)
            .get('/api/people')
            .expect(200)
            .expect('Content-Type', /json/)
            //.expect(/[{"name":"api","version":"0.0.1"}]/)
            .end(function (err, res) {
                console.log(res.body);
                done(err);
            });
    });

});
