const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');

export function showSearchAlert() {
	searchInput.classList.add('error');
	searchBtn.classList.add('error');

	const clearError = () => {
		if (searchInput.value.trim() !== '' || !searchInput.value) {
			searchInput.classList.remove('error');
			searchBtn.classList.remove('error');
			searchInput.removeEventListener('input', clearError); 
		}
	};

	searchInput.addEventListener('input', clearError);
}
