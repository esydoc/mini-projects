//
const calculatorDisplay = document.querySelector('#display');

//
function invert(str) {
	calculatorDisplay.value = -str;
}

//
function percent(str) {
	calculatorDisplay.value = str / 100;
}

//
function deleteLast(str) {
	calculatorDisplay.value = str.slice(0, -1);
}

//
function deleteAll(str) {
	str = '';
	calculatorDisplay.value = str;
}

//
function render(str) {
	calculatorDisplay.value += str;
}

//
function replace(str) {
	calculatorDisplay.value = str;
}

//
function updateDisplay(e) {
	let displayValue = calculatorDisplay.value;
	let buttonValue = e.target.dataset.key;

	const rxNumbers = /[0-9]/g;
	const rxNumbersDecimals = /[0-9.]/g;
	const rxNumbersDecimalsOperators = /[0-9.\/*\-+]/g;
	const rxOperators = /[\/*\-+]/g;

	if (rxNumbers.test(buttonValue) === true) {
		// When a number button is clicked, add the number to the display
		render(buttonValue);
	} else if (buttonValue === '.') {
		// When the decimal button is clicked:
		// If the display is empty, add '0' + '.' to the display,
		// But if the display isn't empty AND adding a decimal will still result in a number string, add the decimal to the display
		if (displayValue === '') {
			render('0.');
		} else if (displayValue !== '' && typeof eval(displayValue + buttonValue) === 'number') {
			render(buttonValue);
		}
	} else if (rxOperators.test(buttonValue) === true) {
		// When an operator button is clicked:
		// If the display is empty, add '0' + the operator to the display,
		// But if the display has numbers and no operators, add the operator to the display
		if (displayValue === '') {
			render(`0${buttonValue}`);
		} else if (
			rxNumbersDecimals.test(displayValue) === true &&
			rxOperators.test(displayValue) === false
		) {
			render(buttonValue);
		}
	} else if (buttonValue === 'i') {
		// When the invert button is clicked,
		// If the display contains only a number, invert the number and display it
		if (rxNumbersDecimals.test(displayValue) === true) {
			invert(displayValue);
		}
	} else if (buttonValue === 'p') {
		// When the percentage button is clicked,
		// If the display contains only a number, divide the number by 100 and display it
		if (rxNumbersDecimals.test(displayValue) === true) {
			percent(displayValue);
		}
	} else if (buttonValue === 'c') {
		// When the clear button is clicked,
		// Clear the display
		deleteAll(displayValue);
	} else if (buttonValue === 'Backspace') {
		// When the delete button is clicked,
		// Delete the last character in the display
		deleteLast(displayValue);
	} else if (buttonValue === '=') {
		// When the equals button is clicked,
		// If calculating what's currently on the display results in a number string, display the result
		let result = eval(displayValue);
		if (rxNumbersDecimalsOperators.test(displayValue) === true && typeof result === 'number') {
			replace(result);
		}
	}
}

//
function simulateButtonClick(e) {
	let keypress = e.key;
	let button = document.querySelector(`[data-key='${keypress}']`);

	if (
		/[0-9.\/*\-+=cip]/g.test(keypress) === true ||
		keypress === 'Backspace' ||
		keypress === 'Enter'
	) {
		if (keypress === 'Enter') {
			keypress === '=';
		}
		button.click();
		button.classList.add('--isActive');
		setTimeout(() => {
			button.classList.remove('--isActive');
		}, 150);
	} else {
		console.log('Invalid Key!');
	}
}

// If a calculator button is clicked, update the calculator display
window.addEventListener('click', updateDisplay);

// If a keyboard key is pressed, update the calculator
window.addEventListener('keydown', simulateButtonClick);
