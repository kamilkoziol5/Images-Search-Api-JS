import showDownloadSuccess from './showDownloadSuccess.js';

export default function downloadImage(width, height, qualityInput, imageSrc) {
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	const img = new Image();
	img.crossOrigin = 'anonymous';
	img.src = imageSrc;

	img.onload = () => {
		canvas.width = Number(width);
		canvas.height = Number(height);

		const qualityValue = qualityInput.checked ? 0.6 : 1;

		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		const dataURL = canvas.toDataURL('image/jpeg', qualityValue);

		const a = document.createElement('a');
		a.href = dataURL;
		a.download = 'resized-image.jpg';
		a.click();

		showDownloadSuccess();
	};

	img.onerror = () => {
		console.error('Nie udało się załadować obrazu do canvas.');
	};
}
