var assert = chai.assert;
var expect = chai.expect;

describe('The Address Book App', function() {

  describe('the contact service', function() {
    var contactService, $httpBackend;

    beforeEach(function() {
      module('AddressBook');
      inject(function($injector) {
        contactService = $injector.get('contactService');
        $httpBackend = $injector.get('$httpBackend');
      });
    });

    it('should have a property contacts, an array', function() {
      expect(contactService.contacts).to.be.an('array');
    });

    it('should call the backend', function() {
      $httpBackend
        .expectGET('http://localhost:9001/contacts')
        .respond(200, []);
      $httpBackend.flush();
    });
  });

  describe('the contact controller', function() {
    var $controller, $scope, contactService, $httpBackend;

    beforeEach(function() {
      module('AddressBook');
      inject(function($injector, $rootScope) {
        $scope = $rootScope.$new();
        $controller = $injector.get('$controller');
        contactService = $injector.get('contactService');
        $httpBackend = $injector.get('$httpBackend');
      });
    });

    it('should store an array of contact in scope', function() {
      $controller('ContactController', {$scope: $scope, contactService: contactService});
      assert.isArray($scope.contacts);
    })
  });

  describe('thi poper filter', function() {
    var proper;

    beforeEach(function() {
      module('AddressBook');
      inject(function($injector) {
        proper = $injector.get('$filter')('proper');
      });
    });

    it('should proper case a string', function() {
      expect(proper('ned stark')).to.equal('Ned Stark');
      expect(proper('harry harrison')).to.equal('Harry Harrison');
    });

    it('should take a number and return as string', function() {
      expect(proper(123)).to.equal('123');
    });

    it('should throw error on non string/number input', function() {
      assert.throws(function() {
        proper(undefined);
      });
    });
  });
});
