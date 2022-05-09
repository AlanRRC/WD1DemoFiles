/*
	weather.js
	Load the weather.json file
	Grab the relevant values from the JSON and create HTML 
	DOM elements that will display the information.

	Alan Simpson
	10.30.2022
*/

const load = () => {
	fetch('weather.json')
		.then(result => {
			return result.json();
		})
		.then(data => {
			createWeather(data);
		});
}

//	Loop through the cities in the JSON
//	Build a section, h1, ul and lis for each city
const createWeather = (weatherData) => {
	console.table(weatherData)
}

//	Add the event listener to run when the page is loaded
document.addEventListener("DOMContentLoaded", load);
















