describe('Add Pages', function() {

    //var ptor = protractor.getInstance();
    //console.log('protractor', browser);
    beforeEach(function() {
        browser.get('http://localhost:9999/#people');
    });

    it('should click load', function() {
        element(by.id('loadBtn')).click().then(function() {
            element(by.model('q')).sendKeys('Al').then(function () {
                //var fn=element(by.repeater('person in people | searchApi:q').
                  //  row(0).column('{{person.firstName}}'));
            });
        });
  });


});


