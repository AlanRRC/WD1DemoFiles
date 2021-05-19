/*
	Survey Form Validation
	June 9 2020
	Alan Simpson
 */



/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the submit event
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e)
{
	//	Hides all error elements on the page
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		return false;
	}

	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e A reference to the reset event
 * return  True allows the reset to happen; False prevents
 *         the browser from resetting the form.
 */
function resetForm(e){
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear survey?') )
	{
		// Ensure all error fields are hidden
		hideAllErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("fname").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Displays the error for an invalid form field.
 *
 * param formField A reference to the form field that caused a validation error.
 * param errorId   The id of the error element to display.
 * param errorFlag True (an error has already occured), False (no errors have occured thus far)
 */
function showError(formField, errorId, errorFlag){
	// Set the display style of the error element to diplay
	document.getElementById(errorId).style.display = "block";
	
	// Determine if this is the first error
	// If so, set focus to the text field
	if ( !errorFlag )
	{
		// Set focus to the text field that caused the error
		formField.focus();
		
		if ( formField.type == "text" )
		{
			// Select the text in the text field
			formField.select();
		}		
	}
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors(){
	// Code below here


	
	// Code above here
	return errorFlag;
}

/*
 * Resets (hides) all of the error messages on the page.
 */
function hideAllErrors(){

}

/*
 * Handles the onclick event for program radio buttons for programs
 * that have a major.
 *
 * param  major  The id of the radio button that was clicked
 */
function showMajor(major){

}

/*
 * Hides elements in the Major Information section of the page
 */
function hideMajor(){
	// Hide the heading in the major section
	document.getElementById("majorheading").style.display = "none";

	// Hide the text field input for both majors
	document.getElementById("bitmajordiv").style.display = "none";
	document.getElementById("bamajordiv").style.display = "none";
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str){
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement){
	// Check if the text field has a value
	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		// Invalid entry
		return false;
	}
	
	// Valid entry
	return true;
}

/**
 * Handles the load event of the document.
 */
function load(){
	// Add event listener for the form submit
	document.getElementById("survey_form").addEventListener("submit", validate);

	// Reset the form using the default browser reset
	// This is done to ensure the radio buttons are unchecked when the page is refreshed
	// This line of code must be done before attaching the event listener for the customer reset
	document.getElementById("survey_form").reset();

	// Add event listener for our custom form submit function
	document.getElementById("survey_form").addEventListener("reset", resetForm);

	// Add event listeners for the radio buttons

}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
