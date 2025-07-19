export async function downloadImage(src) {
	try {
		const response = await fetch(src);
		const data = await response.blob();

		const a = document.createElement('a');
		a.href = URL.createObjectURL(data);
		a.download = `photo-${Date.now()}.jpg`;
		a.click();
		0;
	} catch (err) {
		console.error(err);
	}
}
window.downloadImage = downloadImage;
