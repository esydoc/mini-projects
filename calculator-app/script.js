// Store required DOM elements
const display = document.querySelector('.calculator__display');

// If a button is clicked,
// Display the value
window.addEventListener('click', displayButtonClick);

// If a keypress matches a button value on the calculator,
// Simulate a button click on the corresponding button and display the value
window.addEventListener('keydown', simulateButtonClickFromKeypress);

// Function for displaying button clicks
function displayButtonClick(e) {
	switch (e.target.value) {
		case '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9':
			display.value += e.target.value;
			break;

		case 'C':
			displayClear();
			break;

		case '±':
			/^[0-9.-]+$/.test(display.value) == true
				? (display.value = -display.value)
				: alert('Invalid operation!');
			break;

		case '%':
			/^[0-9.-]+$/.test(display.value) == true
				? (display.value = display.value / 100)
				: alert('Invalid operation!');
			break;

		case '÷':
			/^[0-9.*/+-]+$/.test(display.value) == true &&
			/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
				? (display.value += '/')
				: alert('Invalid input!');
			break;

		case '×':
			/^[0-9.*/+-]+$/.test(display.value) == true &&
			/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
				? (display.value += '*')
				: alert('Invalid input!');
			break;

		case '-' || '+' || '.':
			/^[0-9.*/+-]+$/.test(display.value) == true &&
			/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
				? (display.value += e.key)
				: alert('Invalid input!');
			break;

		case '=':
			displayResult();
			break;

		default:
			break;
	}
}

// Function for simulating button clicks
function simulateButtonClickFromKeypress(e) {
	console.log(e.key);
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
		toggleActiveButton(e.key);
		display.value += e.key;
	} else if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+' || e.key == '.') {
		toggleActiveButton(e.key);
		/^[0-9.*/+-]+$/.test(display.value) == true &&
		/^[0-9]/.test(display.value.charAt(display.value.length - 1)) == true
			? (display.value += e.key)
			: alert('Invalid input!');
	} else {
		switch (e.key) {
			case 'x':
				toggleActiveButton(e.key);
				/^[0-9.*/+-]+$/.test(display.value) == true &&
				/^[0-9.]/.test(display.value.charAt(display.value.length - 1)) == true
					? (display.value += '*')
					: alert('Invalid input!');
				break;
			case 'c':
				toggleActiveButton(e.key);
				displayClear();
				break;
			case 'i':
				toggleActiveButton(e.key);
				/^[0-9.-]+$/.test(display.value) == true
					? (display.value = -display.value)
					: alert('Invalid operation!');
				break;
			case 'p':
				toggleActiveButton(e.key);
				/^[0-9.-]+$/.test(display.value) == true
					? (display.value = display.value / 100)
					: alert('Invalid operation!');
				break;
			case '=':
				toggleActiveButton(e.key);
				displayResult();
				break;
			case 'Enter':
				toggleActiveButton(e.key);
				displayResult();
				break;
			case 'Backspace':
				deleteLastInputFromDisplay();
				break;
			default:
				break;
		}
	}
}

// Function for toggling the --is-active class based on button name
function toggleActiveButton(str) {
	let activeButtonName = convertValueToClass(str);
	let activeButton = document.querySelector(`.${activeButtonName}`);
	console.log(activeButtonName);
	activeButton.classList.toggle('--is-active');
	setTimeout(() => {
		activeButton.classList.toggle('--is-active');
	}, 100);
}

// Function for converting a keypress value to it's equivalent button id
function convertValueToClass(str) {
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

// Function for deleting the last input from the display
function deleteLastInputFromDisplay() {
	display.value = display.value.slice(0, -1);
}

// Function for clearing the display
function displayClear() {
	display.value = '';
}

// Function for displaying the result
function displayResult() {
	let result = math.evaluate(display.value);
	if (typeof result !== 'number') {
		alert('Enter valid equation!');
	} else {
		display.value = result;
	}
}
