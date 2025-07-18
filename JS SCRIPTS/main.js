import { loadMoreImages } from './loadMoreImages.js';
import { loadSearchImages } from './loadSearchImages.js';

const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');

loadMoreBtn.addEventListener('click', loadMoreImages);

searchInput.addEventListener('keyup', e => {
	if (e.key === 'Enter') loadSearchImages();
});

searchBtn.addEventListener('click', loadSearchImages);
