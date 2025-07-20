export function clearApp() {
	const imagesWrapper = document.querySelector('.display-image-wrapper');
	const noPhotosContainer = document.querySelector('.no-photos-container');
	const loadBtn = document.querySelector('.load-more');
	const displayImageText = document.querySelector('.display-image-text');
	const searchInput = document.querySelector('#search-input');
	const noPhotosContainerH3 = noPhotosContainer.querySelector('h3');
	const noPhotosContainerIMG = noPhotosContainer.querySelector('img');
	const errorSpan = document.querySelector('.error-message');

	if (displayImageText) displayImageText.remove();

	if (imagesWrapper) imagesWrapper.innerHTML = ``;

	if (searchInput.classList.contains('error'))
		searchInput.classList.remove('error');

	if (errorSpan) {
		errorSpan.style.display = 'none';
		errorSpan.textContent = '';
	}

	noPhotosContainer.classList.remove('hide');
	loadBtn.classList.remove('shown');
	searchInput.value = '';
	noPhotosContainerH3.textContent = 'Your search result will appear here.';
	noPhotosContainerIMG.alt =
		'Illustration of two characters and a screen with a search icon';
	noPhotosContainerIMG.src = 'images/MyApril6.webp';
	document.body.classList.remove('height');
}

export default clearApp;
