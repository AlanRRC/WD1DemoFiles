/*
	Pass/Fail Demonstration 
	March 12, 2020
	Alan Simpson
*/

function load(){

	//	Event listeners for the buttons
	let submit = document.getElementById("submit");
	submit.addEventListener("click", checkData);

	let clear = document.getElementById("clearbutton");
	clear.addEventListener("click", clearButton);
}

function checkData(){
	//	Validate the data
	//	Retrieve the data from the DOM

}

function displayData(name,mark){
	//	Declare variables

}

//	Clears the data in the form and hides the clear button
function clearButton(){
	let tbody = document.getElementsByTagName("tbody")[0];
	while(tbody.firstChild){
		tbody.removeChild(tbody.firstChild);
	}

	clearbutton.style.display = "none";
	resetFields();

}

//	Resets the form's inputs
function resetFields(){
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
}


document.addEventListener("DOMContentLoaded", load);












