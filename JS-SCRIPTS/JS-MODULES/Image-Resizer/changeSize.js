export default function changeSize(ogImageRatio, direction) {
	const widthInput = document.querySelector('#width-input');
	const heightInput = document.querySelector('#height-input');
	const ratioInput = document.querySelector('#ratio-input');

	if (!ratioInput.checked) return;

	if (direction === 'height') {
		const width = parseFloat(widthInput.value);
		if (isNaN(width)) return;

		const height = width / ogImageRatio;
		heightInput.value = Math.round(height);
	} else if (direction === 'width') {
		const height = parseFloat(heightInput.value);
		if (isNaN(height)) return;

		const width = height * ogImageRatio;
		widthInput.value = Math.round(width);
	}
}
