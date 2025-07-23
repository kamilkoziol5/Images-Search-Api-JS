import clearApp from './JS-MODULES/ClearApp.js';
import loadMoreImages from './JS-MODULES/LoadMoreImages.js';
import loadSearchImages from './JS-MODULES/LoadSearchImages.js';
import clearInput from './JS-MODULES/ClearInput.js';

const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');
const resetBtn = document.querySelector('.reset-btn');
const clearInputBtn = document.querySelector('.clear-input-btn');

loadMoreBtn.addEventListener('click', loadMoreImages);

searchInput.addEventListener('keyup', e => {
	if (e.key === 'Enter') loadSearchImages();
});

clearInputBtn.addEventListener('click', clearInput);
searchBtn.addEventListener('click', loadSearchImages);
resetBtn.addEventListener('click', clearApp);
