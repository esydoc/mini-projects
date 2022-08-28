const display = document.querySelector('#display');

const errorMessage = 'Invalid!';

// Function for emptying a string
function clear(str) {
	str = '';
}

// Function for deleting the last character in a string
function deleteLast(str) {
	str = str.slice(0, -1);
}

// Function for inverting the value of a valid number string
function invertValue(str) {
	switch (validateNum(str)) {
		case 'number':
			return -str;
		case 'invalid':
			alert(errorMessage);
			break;
		default:
			break;
	}
}

// Function for dividing the value of a valid number string by 100
function percentValue(str) {
	switch (validateNum(str)) {
		case 'valid':
			return str / 100;
		case 'invalid':
			alert(errorMessage);
			break;
		default:
			break;
	}
}

// Function for translating an operator string
function translateOperator(str) {
	switch (str) {
		case '÷':
			return '/';
		case '×':
			return '*';
		case 'x':
			return '*';
		case '-':
			return '-';
		case '+':
			return '+';

		default:
			return str;
	}
}

// Function for adding an operator to a valid number string
function addOperator(str) {
	let currentDisplay = display.value;
	let translatedOperator = translateOperator(str);
	switch (validateNum(currentDisplay)) {
		case 'valid':
			return translatedOperator;
		case 'invalid':
			alert(errorMessage);
			break;
		default:
			break;
	}
}

// Function for adding a decimal to a valid number string
function addDecimal(str) {
	let currentDisplay = display.value;
	switch (validateNum(`${currentDisplay} + ${str}`)) {
		case 'valid':
			return str;
		case 'invalid':
			alert(errorMessage);
		default:
			break;
	}
}

// Function for solving a string
function solve(str) {
	return math.eval(str);
}

// Function for validating a number string
function validateNum(str) {
	let result = solve(str);
	if (typeof result == 'number') {
		return 'valid';
	} else {
		return 'invalid';
	}
}

// Function for updating a string
function updateValue(str, f) {
	if (str === str && f === undefined) {
		display.value += str;
	} else {
		str = f;
	}
}

// Functioning for displaying a value
function displayValue(str1, str2, f1) {
	// If the first string is not a number,
	// Render the string
	// Otherwise, validate the string and decide whether to update it or alert an
	// error message
	Number(str1) !== NaN
		? updateValue(str1)
		: validateNum(str1) == 'valid'
		? updateValue(str2, f1)
		: alert(errorMessage);
}

// Function for translating a keypress value to it's equivalent button id
function translateValueToClassName(str) {
	switch (str) {
		case '0':
			return 'zero';
		case '1':
			return 'one';
		case '2':
			return 'two';
		case '3':
			return 'three';
		case '4':
			return 'four';
		case '5':
			return 'five';
		case '6':
			return 'six';
		case '7':
			return 'seven';
		case '8':
			return 'eight';
		case '9':
			return 'nine';
		case 'c':
			return 'clear';
		case 'i':
			return 'invert';
		case 'p':
			return 'percent';
		case '/':
			return 'divide';
		case '*':
			return 'multiply';
		case 'x':
			return 'multiply';
		case '-':
			return 'subtract';
		case '+':
			return 'add';
		case '=':
			return 'equals';
		case 'Enter':
			return 'equals';
		case '.':
			return 'decimal';
		default:
			break;
	}
}

// Function for toggling the --is-active class based on button name
function simulateButtonClick(str) {
	let activeButtonName = translateValueToClass(str);
	let activeButton = document.querySelector(`.${activeButtonName}__button`);
	console.log(activeButtonName);
	activeButton.classList.toggle('--is-active');
	setTimeout(() => {
		activeButton.classList.toggle('--is-active');
	}, 100);
}

// Function for updating the display
function updateDisplay(e) {
	let buttonValue = e.target.value;
	let currentDisplay = display.value;
	let currentResult = solve(currentDisplay);
	let pendingResult = solve(`${currentDisplay}+${buttonValue}`);

	if (
		buttonValue == '0' ||
		buttonValue == '1' ||
		buttonValue == '2' ||
		buttonValue == '3' ||
		buttonValue == '4' ||
		buttonValue == '5' ||
		buttonValue == '6' ||
		buttonValue == '7' ||
		buttonValue == '8' ||
		buttonValue == '9'
	) {
		displayValue(buttonValue);
	} else if (
		buttonValue == '÷' ||
		buttonValue == '×' ||
		buttonValue == '-' ||
		buttonValue == '+'
	) {
		displayValue(currentResult, currentDisplay, addOperator);
	} else {
		switch (buttonValue) {
			case 'C':
				clear(currentDisplay);
				break;

			case '±':
				displayValue(currentResult, currentDisplay, invertValue);
				break;

			case '%':
				displayValue(pendingResult, currentDisplay, percentValue);
				break;

			case '.':
				displayValue(pendingResult, currentDisplay, addDecimal);
				break;

			case '=':
				displayValue(currentResult, currentResult);
				break;

			default:
				break;
		}
	}
}

// Function for updating the calculator
function updateCalculator(e) {
	let keyValue = e.key;
	let currentDisplay = display.value;
	let currentResult = solve(currentDisplay);
	let pendingResult = solve(`${currentDisplay}+${keyValue}`);

	if (
		keyValue == '0' ||
		keyValue == '1' ||
		keyValue == '2' ||
		keyValue == '3' ||
		keyValue == '4' ||
		keyValue == '5' ||
		keyValue == '6' ||
		keyValue == '7' ||
		keyValue == '8' ||
		keyValue == '9'
	) {
		displayValue(buttonValue);
	} else if (
		keyValue == '/' ||
		keyValue == '*' ||
		keyValue == 'x' ||
		keyValue == '-' ||
		keyValue == '+'
	) {
		displayValue(currentResult, currentDisplay, addOperator);
	} else if (keyValue == '=' || keyValue == 'Enter') {
		displayValue(currentResult, currentResult);
	} else if (keyValue == 'Backspace' || keyValue == 'Delete') {
		deleteLast(currentDisplay);
	} else {
		switch (keyValue) {
			case 'c':
				clear(currentDisplay);
				break;

			case 'i':
				displayValue(currentResult, currentDisplay, invertValue);
				break;

			case 'p':
				displayValue(pendingResult, currentDisplay, percentValue);
				break;

			case '.':
				displayValue(pendingResult, currentDisplay, addDecimal);
				break;

			default:
				break;
		}
	}
}

// If a calculator button is clicked, update the display
window.addEventListener('click', updateDisplay);

// If a keyboard key is pressed, update the calculator
window.addEventListener('keydown', updateCalculator);
