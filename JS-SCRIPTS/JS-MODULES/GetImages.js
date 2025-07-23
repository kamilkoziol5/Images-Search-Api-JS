import GenerateImagesHTML from './GenerateImagesHTML.js';

export async function getImages(apiUrl, searchValue) {
	const loadBtn = document.querySelector('.load-more');
	const apiKey = '5UJ9ivFIBBQUzlePedlfD4HpPWxGlJJfm5OSzPkE76jrmU9SqgZU9106';
	try {
		loadBtn.innerText = 'Loading';
		loadBtn.classList.add('disabled');
		const response = await fetch(apiUrl, {
			headers: { Authorization: apiKey },
		});

		if (!response.ok) {
			throw new Error('Data fetch error.');
		}

		const data = await response.json();
		GenerateImagesHTML(data.photos, searchValue);
		loadBtn.innerText = 'Load More';
		loadBtn.classList.remove('disabled');
	} catch (err) {
		console.error('There was a problem loading the images:', err);
	}
}

export default getImages;
