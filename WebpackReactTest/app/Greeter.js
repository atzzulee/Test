// Greeter.js
//var config = require('./config.json');

module.exports = function () {
	var greet = document.createElement('div');
	greet.innerHTML = 'Hello World!!'; //config.greetText;
	return greet;
}