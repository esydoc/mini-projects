// Store required elements from the DOM
const calculator = document.querySelector('.calculator');

const display = document.querySelector('.calculator__display');

const calculatorButtons = document.querySelectorAll('#button');

const clearButton = document.querySelector("input[value='C']");
const invertButton = document.getElementById('#invert');
const percentageButton = document.querySelector("input[value='%']");
const divideButton = document.querySelector("input[value='/']");
const sevenButton = document.querySelector("input[value='7']");
const eightButton = document.querySelector("input[value='8']");
const nineButton = document.querySelector("input[value='9']");
const multiplyButton = document.querySelector("input[value='*']");
const fourButton = document.querySelector("input[value='4']");
const fiveButton = document.querySelector("input[value='5']");
const sixButton = document.querySelector("input[value='6']");
const subtractButton = document.querySelector("input[value='-']");
const oneButton = document.querySelector("input[value='1']");
const twoButton = document.querySelector("input[value='2']");
const threeButton = document.querySelector("input[value='3']");
const addButton = document.querySelector("input[value='+']");
const zeroButton = document.querySelector("input[value='0']");
const decimalButton = document.querySelector("input[value='.']");
const equalsButton = document.querySelector("input[value='=']");

// If a keypress matches a button value on the calculator,
// Display the value
window.addEventListener('keydown', displayKeyInput);

// If a button is clicked,
// Display the value
window.addEventListener('click', displayButtonInput);

// If a keypress value matches a button value,
// Toggle the --is-active class
window.addEventListener('keydown', simulateButtonClick);

// Function for simulating button clicks
function simulateButtonClick(e) {
	let key = e.key;
	console.log(key);
	if (key == 'c') {
		clearButton.classList.toggle('--is-active');
		setTimeout(() => {
			clearButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == 'n') {
		invertButton.classList.toggle('--is-active');
		setTimeout(() => {
			invertButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == 'p') {
		percentageButton.classList.toggle('--is-active');
		setTimeout(() => {
			percentageButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '/') {
		divideButton.classList.toggle('--is-active');
		setTimeout(() => {
			divideButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '7') {
		sevenButton.classList.toggle('--is-active');
		setTimeout(() => {
			sevenButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '8') {
		eightButton.classList.toggle('--is-active');
		setTimeout(() => {
			eightButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '9') {
		nineButton.classList.toggle('--is-active');
		setTimeout(() => {
			nineButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '*' || key == 'x') {
		multiplyButton.classList.toggle('--is-active');
		setTimeout(() => {
			multiplyButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '4') {
		fourButton.classList.toggle('--is-active');
		setTimeout(() => {
			fourButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '5') {
		fiveButton.classList.toggle('--is-active');
		setTimeout(() => {
			fiveButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '6') {
		sixButton.classList.toggle('--is-active');
		setTimeout(() => {
			sixButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '-') {
		subtractButton.classList.toggle('--is-active');
		setTimeout(() => {
			subtractButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '1') {
		oneButton.classList.toggle('--is-active');
		setTimeout(() => {
			oneButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '2') {
		twoButton.classList.toggle('--is-active');
		setTimeout(() => {
			twoButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '3') {
		threeButton.classList.toggle('--is-active');
		setTimeout(() => {
			threeButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '+') {
		addButton.classList.toggle('--is-active');
		setTimeout(() => {
			addButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '0') {
		zeroButton.classList.toggle('--is-active');
		setTimeout(() => {
			zeroButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '.') {
		decimalButton.classList.toggle('--is-active');
		setTimeout(() => {
			decimalButton.classList.toggle('--is-active');
		}, 100);
	} else if (key == '=' || key == 'Enter') {
		equalsButton.classList.toggle('--is-active');
		setTimeout(() => {
			equalsButton.classList.toggle('--is-active');
		}, 100);
	}
}

// Function for displaying button clicks
function displayButtonInput(e) {
	if (
		e.target.value == '0' ||
		e.target.value == '1' ||
		e.target.value == '2' ||
		e.target.value == '3' ||
		e.target.value == '4' ||
		e.target.value == '5' ||
		e.target.value == '6' ||
		e.target.value == '7' ||
		e.target.value == '8' ||
		e.target.value == '9'
	) {
		display.value += e.target.value;
	} else if (
		(e.target.value == '+' || e.target.value == '-' || e.target.value == '.') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += e.target.value;
	} else if (
		e.target.value == '×' &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '*';
	} else if (
		e.target.value == '÷' &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '/';
	} else if (e.target.value == '±' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = -display.value;
	} else if (e.target.value == '%' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = display.value / 100;
	} else if (e.target.value == '=') {
		displayResult();
	} else if (e.target.value == 'C') {
		displayClear();
	}
}

// Function for displaying keypress values
function displayKeyInput(e) {
	if (
		e.key == '0' ||
		e.key == '1' ||
		e.key == '2' ||
		e.key == '3' ||
		e.key == '4' ||
		e.key == '5' ||
		e.key == '6' ||
		e.key == '7' ||
		e.key == '8' ||
		e.key == '9'
	) {
		display.value += e.key;
	} else if (
		(e.key == '+' || e.key == '-' || e.key == '/' || e.key == '.') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += e.key;
	} else if (
		(e.key == 'x' || e.key == '*') &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '*';
	} else if (e.key == 'n' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = -display.value;
	} else if (e.key == 'p' && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = display.value / 100;
	} else if (e.key == 'Backspace' || e.key == 'Delete') {
		display.value = display.value.slice(0, -1);
	} else if (e.key == '=' || e.key == 'Enter') {
		displayResult();
	} else if (e.key == 'c' || e.key == 'Escape') {
		displayClear();
	}
}

// Function for displaying the result
function displayResult() {
	let currentResult = typeof math.evaluate(display.value);
	if (currentResult == 'number') {
		display.value = math.evaluate(display.value);
	}
}

// Function for clearing the display
function displayClear() {
	display.value = '';
}
