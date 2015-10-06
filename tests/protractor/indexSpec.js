describe('Index Pages', function() {

    //var ptor = protractor.getInstance();
    //console.log('protractor', browser);
    beforeEach(function() {
        browser.get('http://localhost:9999/');
    });

    it('should click the button Sign in', function() {
      /*element(by.id('signInBtn')).click().then(function() {
          expect(browser.getCurrentUrl()).toBe('http://localhost:9999/signin');
      });*/
  });
    it('should click the button Sign Up', function() {
        /*element(by.id('signUpBtn')).click().then(function() {
            expect(browser.getCurrentUrl()).toBe('http://localhost:9999/signup');
        });*/
    });


});


