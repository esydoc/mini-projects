//
const calculatorDisplay = document.querySelector('#display');

//
function simulateButtonClick(str) {
	if (str === 'Backspace') {
		return;
	} else if (str === 'Enter') {
		document.querySelector(`[data-key='=']`).classList.add('--active');
		setTimeout(() => {
			document.querySelector(`[data-key='=']`).classList.remove('--active');
		}, 50);
	} else if (/[0-9.\/*\-+cip]/g.test(str) === true) {
		document.querySelector(`[data-key='${str}']`).classList.add('--active');
		setTimeout(() => {
			document.querySelector(`[data-key='${str}']`).classList.remove('--active');
		}, 50);
	} else {
		return;
	}
}

//
function updateDisplayOnButtonClick(e) {
	if (/[0-9]/g.test(e.target.dataset.key) === true) {
		calculatorDisplay.value += e.target.dataset.key;
	} else if (e.target.dataset.key === '.') {
		if (calculatorDisplay.value === '') {
			calculatorDisplay.value = '0.';
		} else if (
			calculatorDisplay.value !== '' &&
			typeof eval(calculatorDisplay.value + e.target.dataset.key) === 'number'
		) {
			calculatorDisplay.value += e.target.dataset.key;
		} else {
			return;
		}
	} else if (/[\/*\-+]/g.test(e.key) === true) {
		if (calculatorDisplay.value === '') {
			calculatorDisplay.value = `0${e.target.dataset.key}`;
		} else if (
			/[0-9.]/g.test(calculatorDisplay.value) === true &&
			/[\/*\-+]/g.test(calculatorDisplay.value) === false
		) {
			calculatorDisplay.value += e.target.dataset.key;
		} else {
			return;
		}
	} else if (e.target.dataset.key === 'i') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			calculatorDisplay.value = -calculatorDisplay.value;
		}
	} else if (e.target.dataset.key === 'p') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			calculatorDisplay.value = calculatorDisplay.value / 100;
		}
	} else if (e.target.dataset.key === 'c') {
		calculatorDisplay.value = '';
	} else if (e.target.dataset.key === 'Backspace' || e.target.dataset.key === 'Delete') {
		calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
	} else if (e.target.dataset.key === '=' || e.target.dataset.key === 'Enter') {
		let currentResult = eval(calculatorDisplay.value);
		if (
			/[0-9.\/*\-+]/.test(calculatorDisplay.value) === true &&
			typeof currentResult === 'number'
		) {
			calculatorDisplay.value = currentResult;
		}
	} else {
		return;
	}
}

//
function updateDisplayOnKeypress(e) {
	console.log(e.key);

	if (/[0-9]/g.test(e.key) === true) {
		calculatorDisplay.value += e.key;
	} else if (e.key === '.') {
		if (calculatorDisplay.value === '') {
			calculatorDisplay.value = '0.';
		} else if (
			calculatorDisplay.value !== '' &&
			typeof eval(calculatorDisplay.value + e.key) === 'number'
		) {
			calculatorDisplay.value += e.key;
		} else {
			return;
		}
	} else if (/[\/*\-+]/g.test(e.key) === true) {
		if (calculatorDisplay.value === '') {
			calculatorDisplay.value = `0${e.key}`;
		} else if (
			/[0-9.]/g.test(calculatorDisplay.value) === true &&
			/[\/*\-+]/g.test(calculatorDisplay.value) === false
		) {
			calculatorDisplay.value += e.key;
		} else {
			return;
		}
	} else if (e.key === 'i') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			calculatorDisplay.value = -calculatorDisplay.value;
		}
	} else if (e.key === 'p') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			calculatorDisplay.value = calculatorDisplay.value / 100;
		}
	} else if (e.key === 'c') {
		calculatorDisplay.value = '';
	} else if (e.key === 'Backspace') {
		calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
	} else if (e.key === '=' || e.key === 'Enter') {
		let currentResult = eval(calculatorDisplay.value);
		if (
			/[0-9.\/*\-+]/.test(calculatorDisplay.value) === true &&
			typeof currentResult === 'number'
		) {
			calculatorDisplay.value = currentResult;
		}
	} else {
		return;
	}
	simulateButtonClick(e.key);
}

// If a calculator button is clicked, update the calculator display
window.addEventListener('click', updateDisplayOnButtonClick);

// If a keyboard key is pressed, update the calculator
window.addEventListener('keydown', updateDisplayOnKeypress);
