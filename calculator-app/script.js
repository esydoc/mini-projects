// Store required elements from the DOM
const calculator = document.querySelector('.calculator');

const display = document.querySelector('.calculator__display');

const calculatorButtons = document.querySelectorAll("input[type='button']");

const clearButton = document.querySelector('.clear');
const invertButton = document.querySelector('.invert');
const percentButton = document.querySelector('.percent');
const divideButton = document.querySelector('.divide');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const multiplyButton = document.querySelector('.multiply');
const fourButton = document.querySelector('.four');
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const subtractButton = document.querySelector('.subtract');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const addButton = document.querySelector('.add');
const zeroButton = document.querySelector('.zero');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

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
	if (e.key == 'c') {
		clearButton.classList.toggle('--is-active');
		setTimeout(() => {
			clearButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == 'i') {
		invertButton.classList.toggle('--is-active');
		setTimeout(() => {
			invertButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == 'p') {
		percentButton.classList.toggle('--is-active');
		setTimeout(() => {
			percentButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '/') {
		divideButton.classList.toggle('--is-active');
		setTimeout(() => {
			divideButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '7') {
		sevenButton.classList.toggle('--is-active');
		setTimeout(() => {
			sevenButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '8') {
		eightButton.classList.toggle('--is-active');
		setTimeout(() => {
			eightButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '9') {
		nineButton.classList.toggle('--is-active');
		setTimeout(() => {
			nineButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == 'x') {
		multiplyButton.classList.toggle('--is-active');
		setTimeout(() => {
			multiplyButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '4') {
		fourButton.classList.toggle('--is-active');
		setTimeout(() => {
			fourButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '5') {
		fiveButton.classList.toggle('--is-active');
		setTimeout(() => {
			fiveButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '6') {
		sixButton.classList.toggle('--is-active');
		setTimeout(() => {
			sixButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '-') {
		subtractButton.classList.toggle('--is-active');
		setTimeout(() => {
			subtractButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '1') {
		oneButton.classList.toggle('--is-active');
		setTimeout(() => {
			oneButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '2') {
		twoButton.classList.toggle('--is-active');
		setTimeout(() => {
			twoButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '3') {
		threeButton.classList.toggle('--is-active');
		setTimeout(() => {
			threeButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '+') {
		addButton.classList.toggle('--is-active');
		setTimeout(() => {
			addButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '0') {
		zeroButton.classList.toggle('--is-active');
		setTimeout(() => {
			zeroButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '.') {
		decimalButton.classList.toggle('--is-active');
		setTimeout(() => {
			decimalButton.classList.toggle('--is-active');
		}, 100);
	} else if (e.key == '=' || e.key == 'Enter') {
		equalsButton.classList.toggle('--is-active');
		setTimeout(() => {
			equalsButton.classList.toggle('--is-active');
		}, 100);
	}
	console.log(e.key);
}

// Function for displaying button clicks
function displayButtonInput(e) {
	if (
		e.target.value == zeroButton.value ||
		e.target.value == oneButton.value ||
		e.target.value == twoButton.value ||
		e.target.value == threeButton.value ||
		e.target.value == fourButton.value ||
		e.target.value == fiveButton.value ||
		e.target.value == sixButton.value ||
		e.target.value == sevenButton.value ||
		e.target.value == eightButton.value ||
		e.target.value == nineButton.value
	) {
		display.value += e.target.value;
	} else if (
		(e.target.value == addButton.value ||
			e.target.value == subtractButton.value ||
			e.target.value == decimalButton.value) &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += e.target.value;
	} else if (
		e.target.value == multiplyButton.value &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '*';
	} else if (
		e.target.value == divideButton.value &&
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
	) {
		display.value += '/';
	} else if (e.target.value == invertButton.value && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = -display.value;
	} else if (e.target.value == percentButton.value && /^[0-9.-]+$/.test(display.value) == true) {
		display.value = display.value / 100;
	} else if (e.target.value == equalsButton.value) {
		displayResult();
	} else if (e.target.value == clearButton.value) {
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
