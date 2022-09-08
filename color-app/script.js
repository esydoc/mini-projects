//
const bgColor = document.body.style.background;
const buttons = document.querySelectorAll('[input="button"]');
const hexOutput = document.querySelector('#hexOutput');
const rgbOutput = document.querySelector('#rgbOutput');
const hslOutput = document.querySelector('#hslOutput');
const outputs = [hexOutput, rgbOutput, hslOutput];
const outputLabels = document.querySelectorAll('#outputLabel');
const hexButtonLabel = document.querySelector('#hexGeneratorLabel');
const rgbButtonLabel = document.querySelector('#rgbGeneratorLabel');
const hslButtonLabel = document.querySelector('#hslGeneratorLabel');
const lgButtonLabel = document.querySelector('#lgGeneratorLabel');

//
window.addEventListener('load', defaultColorsAndLabels('#fcfcfc'));

//
window.addEventListener('click', updateColorsAndLabels);

//
function generateNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//
function generateHex() {
	const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
	let hex = '#';
	for (let i = 0; i < 6; i++) {
		const index = generateNumberBetween(0, hexValues.length);
		hex += hexValues[index];
	}
	return hex;
}

//
function generateRgb() {
	let r = generateNumberBetween(0, 255);
	let g = generateNumberBetween(0, 255);
	let b = generateNumberBetween(0, 255);
	return `rgb(${r}, ${g}, ${b})`;
}

//
function generateHsl() {
	let h = generateNumberBetween(0, 360);
	let s = generateNumberBetween(0, 100);
	let l = generateNumberBetween(0, 100);
	return `hsl(${h}, ${s}%, ${l}%)`;
}

//
function generateLinearGradient() {
	let color1 = generateHex();
	let color2 = generateHex();
	return [
		`linear-gradient(to right, ${color1}, ${color2})`,
		`linear-gradient(to right, ${hexToRgb(color1)}, ${hexToRgb(color2)})`,
		`linear-gradient(to right, ${hexToHsl(color1)}, ${hexToHsl(color2)})`,
	];
}

//
function hexToRgb(hex) {
	// Convert hex values to rgb values, ignoring the '#'
	let r = parseInt(hex[1] + hex[2], 16),
		g = parseInt(hex[3] + hex[4], 16),
		b = parseInt(hex[5] + hex[6], 16);

	return `rgb(${r}, ${g}, ${b})`;
}

//
function hexToHsl(hex) {
	// Convert hex values to rgb values, ignoring the '#'
	let r = parseInt(hex[1] + hex[2], 16),
		g = parseInt(hex[3] + hex[4], 16),
		b = parseInt(hex[5] + hex[6], 16);
	// Convert to hsl values
	(r /= 255), (g /= 255), (b /= 255);
	let max = Math.max(r, g, b),
		min = Math.min(r, g, b),
		delta = max - min,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) h = 0;
	else if (max == r) h = ((g - b) / delta) % 6;
	else if (max == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);
	if (h < 0) h += 360;

	l = (max + min) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return `hsl(${h}, ${s}%, ${l}%)`;
}

//
function rgbToHex(rgb) {
	// Remove letters, commas and brackets and turn into an array of numbers
	rgb = rgb.substr(4).replace(')', '').split(',');
	// Extract rgb values
	let r = rgb[0],
		g = rgb[1],
		b = rgb[2];
	// Convert to hex values
	(r = parseInt(r, 10).toString(16)),
		(g = parseInt(g, 10).toString(16)),
		(b = parseInt(b, 10).toString(16));
	// Prepend 0s, if necessary
	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	return `#${r}${g}${b}`;
}

//
function rgbToHsl(rgb) {
	// Remove letters, commas and brackets and turn into an array of numbers
	rgb = rgb.substr(4).replace(')', '').split(',');
	// Extract rgb values
	let r = rgb[0],
		g = rgb[1],
		b = rgb[2];
	//Convert to hsl values
	// Make r, g and b fractions of 1
	(r /= 255), (g /= 255), (b /= 255);
	// Find the maximum and minimum channel values
	let min = Math.min(r, g, b),
		max = Math.max(r, g, b),
		delta = max - min,
		h = 0,
		s = 0,
		l = 0;
	// Hue:
	// No difference in channel values
	if (delta == 0) h = 0;
	// Red is max
	else if (max == r) h = ((g - b) / delta) % 6;
	// Green is max
	else if (max == g) h = (b - r) / delta + 2;
	// Blue is max
	else h = (r - g) / delta + 4;
	h = Math.round(h * 60);
	// Make negative hues positive behind 360°
	if (h < 0) h += 360;
	// Lightness:
	l = (max + min) / 2;
	// Saturation:
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return `hsl(${h}, ${s}%, ${l}%)`;
}

//
function hslToHex(hsl) {
	// Leave only the values excluding '%' and turn into an array
	hsl = hsl.substr(4).replace(')', '').replaceAll(' ', '').replaceAll('%', '').split(',');
	// Extract hsl values
	let h = hsl[0],
		s = hsl[1] / 100,
		l = hsl[2] / 100;
	// Convert to rgb values
	let r = 0,
		g = 0,
		b = 0;

	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = l - c / 2;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	// Convert the obtained rgb values into hex values
	r = Math.round((r + m) * 255).toString(16);
	g = Math.round((g + m) * 255).toString(16);
	b = Math.round((b + m) * 255).toString(16);
	// Prepend 0s, if necessary
	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	return `#${r}${g}${b}`;
}

//
function hslToRgb(hsl) {
	// Leave only the values excluding '%' and turn into an array
	hsl = hsl.substr(4).replace(')', '').replaceAll(' ', '').replaceAll('%', '').split(',');
	// Extract hsl values
	let h = hsl[0],
		s = hsl[1] / 100,
		l = hsl[2] / 100;
	// Convert to rgb values
	let r = 0,
		g = 0,
		b = 0;

	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = l - c / 2;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

//
function updateBackgroundColor(color) {
	if (color[0] === '#') {
		document.body.style.background = color;
	} else if (/[linear]/gi.test(color[0])) {
		document.body.style.background = color[0];
	}
}

//
function updateOutputValues(color) {
	// Accepts Hex or Linear Gradient
	if (color[0] === '#') {
		hexOutput.textContent = color;
		rgbOutput.textContent = hexToRgb(color);
		hslOutput.textContent = hexToHsl(color);
	} else if (/[linear]/gi.test(color[0])) {
		hexOutput.textContent = color[0];
		rgbOutput.textContent = color[1];
		hslOutput.textContent = color[2];
	}
}

//
function updateOutputTextStyles(color) {
	outputLabels.forEach((outputLabel) => {
		outputLabel.style.color = color;
		outputLabel.style.textShadow = '0.16rem 0.16rem 0.32rem #00000080';
	});

	outputs.forEach((output) => {
		output.style.color = color;
		output.style.textShadow = '0.16rem 0.16rem 0.32rem #00000080';
	});
}

//
function updateColorsAndLabels(click) {
	let button = click.target.id;

	if (button === 'generateColor') {
		const color = generateHex();

		updateBackgroundColor(color);
		updateOutputValues(color);
		updateOutputTextStyles('#fcfcfc');
	} else if (button === 'generateLinearGradient') {
		const linearGradientColor = generateLinearGradient();

		updateBackgroundColor(linearGradientColor);
		updateOutputValues(linearGradientColor);
		updateOutputTextStyles('#fcfcfc');
	}
}

//
function defaultColorsAndLabels(color) {
	document.body.style.background = color;
	hexOutput.textContent = color;
	rgbOutput.textContent = hexToRgb(color);
	hslOutput.textContent = hexToHsl(color);
}
