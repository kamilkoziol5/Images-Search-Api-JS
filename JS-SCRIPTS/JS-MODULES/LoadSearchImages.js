import { perPage, currentPage, setCurrentQuery } from './state.js';
import getImages from './GetImages.js';
import showSearchAlert from './ShowSearchAlert.js';

export function loadSearchImages() {
	const searchInput = document.querySelector('#search-input');
	const searchValue = searchInput.value.trim();

	if (!searchValue) {
		showSearchAlert('Type something to explore!');
	}

	const wrapper = document.querySelector('.display-image-wrapper');
	const header = document.querySelector('.display-image-text');
	if (wrapper) wrapper.innerHTML = '';
	if (header) header.remove();

	setCurrentQuery(searchValue);

	const apiUrl = `https://api.pexels.com/v1/search?query=${searchValue}&page=${currentPage}&per_page=${perPage}`;
	getImages(apiUrl, searchValue);
}

export default loadSearchImages;
