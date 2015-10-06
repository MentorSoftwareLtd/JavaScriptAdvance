
describe('PeopleCtrl', function() {
    var authRequestHandler, ctrl, $rootScope;
    var people = [{firstName: 'name1', lastName: 'name2'}];
    // Set up the module
    beforeEach(module('jsweb'));

  beforeEach(inject(function($injector) {
      //module=angular.mock.module('jsweb');
      // Set up the mock http service responses
      $httpBackend = $injector.get('$httpBackend');
      // backend definition common for all tests
      authRequestHandler = $httpBackend.when('GET', '/api/people')
          .respond(people);
      // Get hold of a scope (i.e. the root scope)
      $rootScope = $injector.get('$rootScope');
      // The $controller service is used to create instances of controllers
      var $controller = $injector.get('$controller');
      ctrl = $controller('PeopleCtrl', {
          $scope : $rootScope
      });


  }));
  it('should have people and loadPeople defined', function() {
    expect($rootScope.people).toBeDefined();
    expect($rootScope.loadPeople).toBeDefined();
      console.log('Window', window);
  });

    it('should have people and loadPeople defined', function() {
        $httpBackend.expectGET('/api/people');
        $rootScope.loadPeople();
        $httpBackend.flush();
        expect($rootScope.people).toEqual(people);
        console.log('ppp',$rootScope.people);


        //expect($rootScope.people).toBeDefined();
        //expect($rootScope.loadPeople).toBeDefined();
    });



});
