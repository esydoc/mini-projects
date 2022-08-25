// Store the calculator and display elements from the DOM
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');

// If a keypress matches a button value on the calculator,
// Display the value
window.addEventListener('keydown', displayKeyInput);

// If a button on the calculator is clicked,
// Display the value
calculator.addEventListener('click', displayButtonInput);

// Function for displaying button clicks
function displayButtonInput(event) {
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
		event.target.value == '.'
	) {
		display.value += event.target.value;
	} else if (
		(event.target.value == '+' || event.target.value == '-') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += event.target.value;
	} else if (
		event.target.value == '×' &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '*';
	} else if (
		event.target.value == '÷' &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '/';
	} else if (event.target.value == '±' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = -display.value;
	} else if (event.target.value == '%' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = display.value / 100;
	} else if (event.target.value == '=') {
		displayResult();
	} else if (event.target.value == 'C') {
		displayClear();
	}
}

// Function for displaying keypress values
function displayKeyInput(event) {
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
