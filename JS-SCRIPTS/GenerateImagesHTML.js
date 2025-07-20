import downloadImage from './DownloadImage.js';
import createLightbox from './CreateLightbox.js';

export function GenerateImagesHTML(images, name) {
	const imagesCtn = document.querySelector('.display-image-container');
	const imagesWrapper = document.querySelector('.display-image-wrapper');
	const noPhotosContainer = document.querySelector('.no-photos-container');
	const noPhotosContainerH3 = noPhotosContainer.querySelector('h3');
	const noPhotosContainerIMG = noPhotosContainer.querySelector('img');
	const loadBtn = document.querySelector('.load-more');

	imagesWrapper.innerHTML += images
		.map(
			img =>
				`<li onclick="createLightbox('${img.photographer}', '${img.src.large2x}')" class="card">
					<img src="${img.src.large2x}" alt="image-gallery-result" />
					<div class="details">
						<div class="photographer">
							<i class="bx bx-camera"></i>
							<span class="photographer-name">${img.photographer}</span>
						</div>
						<button onclick="downloadImage('${img.src.large2x}');event.stopPropagation()" class="download-image">
									<img src="images/Download.svg" alt="" />

						</button>
					</div>
				</li>`
		)
		.join('');

	if (imagesWrapper.children.length === 0) {
		const searchInput = document.querySelector('#search-input');
		const searchBtn = document.querySelector('.search-btn');
		const alertText = document.querySelector('.error-message');

		noPhotosContainerH3.textContent = 'No results found';
		noPhotosContainerIMG.src = 'images/error-img.webp';
		noPhotosContainerIMG.alt = 'Illustration showing no search results';
		noPhotosContainer.classList.remove('hide');
		loadBtn.classList.remove('shown');
		searchInput.classList.add('error');
		searchBtn.classList.add('error');
		alertText.textContent = 'The entered phrase could not be found.';
		alertText.style.display = 'block';
		return;
	}

	const existingH5 = imagesCtn.querySelector('.display-image-text');
	if (!existingH5) {
		const h5 = document.createElement('h5');
		h5.innerHTML = `
						Wyniki wyszukiwania dla
						<div class="display-image-text-wrapper">
						<span class="display-image-text-span">${name}</span>
						</div>
						
						`;

		h5.classList.add('display-image-text');
		imagesCtn.prepend(h5);
	}

	noPhotosContainer.classList.add('hide');
	loadBtn.classList.add('shown');
	document.body.classList.add('height');
}

export default GenerateImagesHTML;
