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
  })
  .filter('proper', function() {
    return function(name) {
      var type = typeof name;
      if (type !== 'string' && type !== 'number') {
        throw new Error('proper filter can take only string/number as param');
      }

      return name.toString().split(' ').map(function(word) {
        return word[0].toUpperCase().concat(word.slice(1));
      }).join(' ');
    };
  })
  .directive('avatar', function() {
    return {
      restrict: 'AE',
      scope: {
        name: '='
      },
      template: '<span class="avatar">{{name[0] | proper}}</span>'
    };
  });
