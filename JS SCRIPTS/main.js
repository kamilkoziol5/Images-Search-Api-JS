import { clearApp } from './ClearApp.js';
import { loadMoreImages } from './LoadMoreImages.js';
import { loadSearchImages } from './LoadSearchImages.js';

const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');
const resetBtn = document.querySelector('.reset-btn');

loadMoreBtn.addEventListener('click', loadMoreImages);

searchInput.addEventListener('keyup', e => {
	if (e.key === 'Enter') loadSearchImages();
});

searchBtn.addEventListener('pointerdown', loadSearchImages);
resetBtn.addEventListener('pointerdown', clearApp);
