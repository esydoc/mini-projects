// Store the calculator and display elements from the DOM
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');

// If a keypress matches a button value on the calculator,
// Display the value
window.addEventListener('keydown', displayKeypressInput);

// Function for displaying key presses
function displayKeypressInput(event) {
	// If any numbers or operators are pressed,
	// Display them
	// If the X key is pressed,
	// Display the multiplication operator
	// If the N key is pressed AND the display only contains numbers,
	// Invert the current value
	// If the P key is pressed AND the display only contains numbers,
	// Divide the currently displayed value by 100
	// If the backspace or delete keys are pressed,
	// Remove the last displayed keypress
	// If the equals or enter keys are pressed,
	// Display the result
	// If the C or escape keys are pressed,
	// Clear the display
	if (
		event.key == '0' ||
		event.key == '1' ||
		event.key == '2' ||
		event.key == '3' ||
		event.key == '4' ||
		event.key == '5' ||
		event.key == '6' ||
		event.key == '7' ||
		event.key == '8' ||
		event.key == '9' ||
		event.key == '+' ||
		event.key == '-' ||
		event.key == '*' ||
		event.key == '/' ||
		event.key == '.'
	) {
		display.value += event.key;
	} else if (event.key == 'x') {
		display.value += '*';
	} else if (event.key == 'n' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = -display.value;
	} else if (event.key == 'p' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = display.value / 100;
	} else if (event.key == 'Backspace' || event.key == 'Delete') {
		display.value = display.value.slice(0, -1);
	} else if (event.key == '=' || event.key == 'Enter') {
		displayResult();
	} else if (event.key == 'c' || event.key == 'Escape') {
		displayClear();
	}
}

// Function for displaying the result
function displayResult() {
	display.value = math.evaluate(display.value);
}

// Function for clearing the display
function displayClear() {
	display.value = '';
}
