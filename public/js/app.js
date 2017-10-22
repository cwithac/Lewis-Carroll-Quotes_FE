// console.log('app.js is linked to index.html for LC Quotes');

const app = angular.module('quotes-app', []);

angular.module('quotes-app').controller('characterController', ['$http', function($http){

//TOGGLE FOR LOCAL-LIVE
this.baseURL = 'http://localhost:3000/';
// this.baseURL = 'HEROKU'

this.getCharacters = function() {
  $http({
    method: 'GET',
    url: this.baseURL + 'characters/'
  }).then(function(response){
    console.log(response.data);
  })
}

this.getCharacters();

}]);// End of characterController
