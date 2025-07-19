import { getImages } from './GetImages.js';
import { incrementPage, currentPage, perPage, currentQuery } from './state.js';

export function loadMoreImages() {
	incrementPage();
	let apiUrl = `https://api.pexels.com/v1/search?query=${currentQuery}&page=${currentPage}&per_page=${perPage}`;
	getImages(apiUrl);
}
