// Store the calculator and display elements from the DOM
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');

// If a keypress matches a button value on the calculator,
// Display the value
window.addEventListener('keydown', displayKeypressInput);

// If a button on the calculator is clicked,
// Display the value
calculator.addEventListener('click', displayButtonInput);

// Function for displaying button clicks
function displayButtonInput(event) {
	// If the value is X,
	// Display the multiplication operator
	// If the value is C,
	// call the displayCLear function
	// If the value is N AND the display only contains numbers,
	// Invert the current value
	// If the value is P AND the display only contains numbers,
	// Divide the currently displayed value by 100
	// If the division button is clicked,
	// Display the divison operator
	// If the equals button is clicked,
	// Display the result
	if (
		event.target.value == '0' ||
		event.target.value == '1' ||
		event.target.value == '2' ||
		event.target.value == '3' ||
		event.target.value == '4' ||
		event.target.value == '5' ||
		event.target.value == '6' ||
		event.target.value == '7' ||
		event.target.value == '8' ||
		event.target.value == '9' ||
		event.target.value == '+' ||
		event.target.value == '-' ||
		event.target.value == '.'
	) {
		console.log(event.target.value);
		display.value += event.target.value;
	}
	if (event.target.value == 'x') {
		console.log('*');
		display.value += '*';
	}
}

// Function for displaying key presses
function displayKeypressInput(event) {
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
		event.key == '.'
	) {
		display.value += event.key;
	} else if (
		(event.key == '+' || event.key == '-' || event.key == '/') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += event.key;
	} else if (
		(event.key == 'x' || event.key == '*') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
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
	let currentResult = typeof math.evaluate(display.value);
	if (currentResult == 'number') {
		display.value = math.evaluate(display.value);
	} else {
		console.log(currentResult);
	}
}

// Function for clearing the display
function displayClear() {
	display.value = '';
}
