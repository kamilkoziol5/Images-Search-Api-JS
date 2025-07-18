export let currentPage = 1;
export const perPage = 15;

export let currentQuery = '';

export function setCurrentQuery(query) {
	currentQuery = query;
}

export function incrementPage() {
	currentPage++;
}
