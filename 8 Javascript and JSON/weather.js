/*
	weather.js
	Load the weather.json file
	Grab the relevant values from the JSON and create HTML 
	DOM elements that will display the information.

	Alan Simpson
	10.30.2019
*/

//	Add the event listener to run when the page is loaded
document.addEventListener("DOMContentLoaded", load);

function load() {

	fetch('weather.json')
		.then(function (result) {
			return result.json();
		})
		.then(function (data) {
			createWeather(data);
		});
}

//	Loop through the cities in the JSON
//	Build a section, h1, ul and lis for each city
function createWeather(weatherData) {
	console.table(weatherData)
}


















