//
const calculatorDisplay = document.querySelector('#display');

//
function simulateButtonClick(str) {
	if (str === 'Enter') {
		document.querySelector(`[data-key='=']`).classList.add('--isActive');
		setTimeout(() => {
			document.querySelector(`[data-key='=']`).classList.remove('--isActive');
		}, 150);
	} else if (/[0-9.\/*\-+=cip]/g.test(str) === true || str === 'Backspace') {
		document.querySelector(`[data-key='${str}']`).classList.add('--isActive');
		setTimeout(() => {
			document.querySelector(`[data-key='${str}']`).classList.remove('--isActive');
		}, 150);
	} else {
		return;
	}
}

//
function percent(str) {
	calculatorDisplay.value = str / 100;
}

//
function invert(str) {
	calculatorDisplay.value = -str;
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
function updateDisplayOnButtonClick(e) {
	console.log(e.target.dataset.key);

	if (/[0-9]/g.test(e.target.dataset.key) === true) {
		render(e.target.dataset.key);
	} else if (e.target.dataset.key === '.') {
		if (calculatorDisplay.value === '') {
			render('0.');
		} else if (
			calculatorDisplay.value !== '' &&
			typeof eval(calculatorDisplay.value + e.target.dataset.key) === 'number'
		) {
			render(e.target.dataset.key);
		} else {
			return;
		}
	} else if (/[\/*\-+]/g.test(e.target.dataset.key) === true) {
		if (calculatorDisplay.value === '') {
			render(`0${e.target.dataset.key}`);
		} else if (
			/[0-9.]/g.test(calculatorDisplay.value) === true &&
			/[\/*\-+]/g.test(calculatorDisplay.value) === false
		) {
			render(e.target.dataset.key);
		} else {
			return;
		}
	} else if (e.target.dataset.key === 'i') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			invert(calculatorDisplay.value);
		} else {
			return;
		}
	} else if (e.target.dataset.key === 'p') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			percent(calculatorDisplay.value);
		} else {
			return;
		}
	} else if (e.target.dataset.key === 'c') {
		deleteAll(calculatorDisplay.value);
	} else if (e.target.dataset.key === 'Backspace') {
		deleteLast(calculatorDisplay.value);
	} else if (e.target.dataset.key === '=' || e.target.dataset.key === 'Enter') {
		let result = eval(calculatorDisplay.value);
		if (/[0-9.\/*\-+]/.test(calculatorDisplay.value) === true && typeof result === 'number') {
			replace(result);
		} else {
			return;
		}
	} else {
		e.preventDefault();
	}
}

//
function updateDisplayOnKeypress(e) {
	if (
		(/[0-9.\/*\-+=cip]/g.test(e.key) !== true && /[F]/g.test(e.key) === true) ||
		e.key !== 'Backspace' ||
		e.key !== 'Enter'
	) {
		e.preventDefault();
	} else {
		simulateButtonClick(e.key);
	}

	console.log(e.key);

	if (/[0-9]/g.test(e.key) === true && /[F]/g.test(e.key) !== true) {
		render(e.key);
	} else if (e.key === '.') {
		if (calculatorDisplay.value === '') {
			render('0.');
		} else if (
			calculatorDisplay.value !== '' &&
			typeof eval(calculatorDisplay.value + e.key) === 'number'
		) {
			render(e.key);
		} else {
			return;
		}
	} else if (/[\/*\-+]/g.test(e.key) === true) {
		if (calculatorDisplay.value === '') {
			render(`0${e.key}`);
		} else if (
			/[0-9.]/g.test(calculatorDisplay.value) === true &&
			/[\/*\-+]/g.test(calculatorDisplay.value) === false
		) {
			render(e.key);
		} else {
			return;
		}
	} else if (e.key === 'i') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			invert(calculatorDisplay.value);
		} else {
			return;
		}
	} else if (e.key === 'p') {
		if (/[0-9.]/g.test(calculatorDisplay.value) === true) {
			percent(calculatorDisplay.value);
		} else {
			return;
		}
	} else if (e.key === 'c') {
		deleteAll(calculatorDisplay.value);
	} else if (e.key === 'Backspace') {
		deleteLast(calculatorDisplay.value);
	} else if (e.key === '=' || e.key === 'Enter') {
		let result = eval(calculatorDisplay.value);
		if (/[0-9.\/*\-+]/.test(calculatorDisplay.value) === true && typeof result === 'number') {
			replace(result);
		} else {
			return;
		}
	} else {
		e.preventDefault();
	}
}

// If a calculator button is clicked, update the calculator display
window.addEventListener('click', updateDisplayOnButtonClick);

// If a keyboard key is pressed, update the calculator
window.addEventListener('keydown', updateDisplayOnKeypress);
