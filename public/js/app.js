// console.log('app.js is linked to index.html for LC Quotes');

const app = angular.module('quotes-app', []);

angular.module('quotes-app').controller('characterController', ['$http', function($http){

//------------------------------------------------------
//TOGGLE FOR LOCAL-LIVE
//------------------------------------------------------
this.baseURL = 'http://localhost:3000/';
// this.baseURL = 'HEROKU'

//------------------------------------------------------
//VARIABLES
//------------------------------------------------------
  this.characters = [];
  this.individualCharacter = [];

//------------------------------------------------------
//INDEX ROUTE FOR ALL CHARACTERS
//------------------------------------------------------
this.getCharacters = function() {
  $http({
    method: 'GET',
    url: this.baseURL + 'characters/'
  }).then(function(response){
    this.characters = response.data;
  }.bind(this));
};

//------------------------------------------------------
//SHOW ROUTE FOR INDIVIDUAL CHARACTER
//------------------------------------------------------
// this.showIndividualCharacter = function(character_id) {
//   $http({
//     method: 'GET',
//     url: this.baseURL + 'characters/' + character_id
//   }).then(function(response){
//     console.log(response.data);
//   }.bind(this));
// };


//------------------------------------------------------
//PAGE LOAD FUNCTION CALLS
//------------------------------------------------------
this.getCharacters();

}]);// End of characterController
