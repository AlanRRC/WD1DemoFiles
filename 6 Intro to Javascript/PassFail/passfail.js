/*
	Pass/Fail Demonstration 
	March 3, 2023
	Alan Simpson
*/

const load = () => {

	//	Event listeners for the buttons
	let submit = document.getElementById("submit");
	submit.addEventListener("click", checkData);

	let clear = document.getElementById("clearbutton");
	clear.addEventListener("click", clearButton);
}

const checkData = () => {
	//	Validate the data
	//	Retrieve the data from the DOM

}

const displayData = (name, mark) => {
	//	Declare variables

}

//	Clears the data in the form and hides the clear button
const clearButton = () => {
	let tbody = document.getElementById("list");
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	clearbutton.style.display = "none";
	resetFields();

}

//	Resets the form's inputs
const resetFields = () => {
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
}


document.addEventListener("DOMContentLoaded", load);












