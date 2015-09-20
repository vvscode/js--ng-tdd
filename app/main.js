angular.module('AddressBook', [])
  .service('contactService', function($http) {
    var contactService = this;
    this.contacts = [];
    $http.get('http://localhost:9001/contacts').then(function(res) {
      contactService.contacts.push.apply(contactService.contacts, res.data || []);
    });
  })
  .controller('ContactController', function(contactService, $scope) {
    $scope.contacts = contactService.contacts;
  });
