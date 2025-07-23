export function showSearchAlert(text) {
	const searchInput = document.querySelector('#search-input');
	const searchBtn = document.querySelector('.search-btn');
	const searchInputWrapper = document.querySelector('.search-input-wrapper');
	const noPhotosContainer = document.querySelector('.no-photos-container');
	const noPhotosContainerH3 = noPhotosContainer.querySelector('h3');
	const noPhotosContainerIMG = noPhotosContainer.querySelector('img');
	const loadBtn = document.querySelector('.load-more');

	const existingErrorSpan = searchInputWrapper.querySelector('.error-message');
	if (existingErrorSpan) existingErrorSpan.remove();

	const errorSpan = document.createElement('span');
	errorSpan.classList.add('error-message');
	errorSpan.textContent = text;
	searchInputWrapper.append(errorSpan);

	noPhotosContainerH3.textContent = 'No results found';
	noPhotosContainerIMG.src = 'images/error-img.webp';
	noPhotosContainerIMG.alt = 'Illustration showing no search results';
	noPhotosContainer.classList.remove('hide');
	loadBtn.classList.remove('shown');
	searchInput.classList.add('error');
	searchBtn.classList.add('error');
	document.body.classList.remove('height');

	const clearError = () => {
		if (searchInput.value.trim() !== '' || !searchInput.value) {
			searchInput.classList.remove('error');
			searchBtn.classList.remove('error');
			errorSpan.remove();
			document.body.classList.add('height');
			searchInput.removeEventListener('input', clearError);
		}
	};

	searchInput.addEventListener('input', clearError);
}

export default showSearchAlert;
