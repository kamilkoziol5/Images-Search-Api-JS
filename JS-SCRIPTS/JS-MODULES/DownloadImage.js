import showDownloadSuccess from './Image-Resizer/showDownloadSuccess.js';

export async function downloadImage(src) {
	try {
		const response = await fetch(src);
		const data = await response.blob();

		const a = document.createElement('a');
		a.href = URL.createObjectURL(data);
		a.download = `photo-${Date.now()}.jpg`;
		a.click();
		showDownloadSuccess();
	} catch (err) {
		console.error(err);
	}
}
window.downloadImage = downloadImage;

export default downloadImage;
