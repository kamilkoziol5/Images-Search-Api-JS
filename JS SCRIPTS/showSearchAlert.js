export function showSearchAlert() {
	const searchInput = document.querySelector('#search-input');
	const searchBtn = document.querySelector('.search-btn');
	const alertText = document.querySelector('.error-message');
	
	searchInput.classList.add('error');
	searchBtn.classList.add('error');
	alertText.style.display = 'block';

	const clearError = () => {
		if (searchInput.value.trim() !== '' || !searchInput.value) {
			searchInput.classList.remove('error');
			searchBtn.classList.remove('error');
			alertText.style.display = 'none';
			searchInput.removeEventListener('input', clearError);
		}
	};

	searchInput.addEventListener('input', clearError);
}
