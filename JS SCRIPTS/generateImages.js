import { downloadImage } from './donwloadImage.js';
import { createLightbox } from './createLightbox.js';

export function generateHTML(images, name) {
	const imagesCtn = document.querySelector('.display-image-container');
	const imagesWrapper = document.querySelector('.display-image-wrapper');
	const noPhotosContainer = document.querySelector('.no-photos-container');
	const loadBtn = document.querySelector('.load-more');

	

	imagesWrapper.innerHTML += images
		.map(
			img =>
				`<li onclick="createLightbox('${img.photographer}', '${img.src.large2x}')" class="card">
					<img src="${img.src.large2x}" alt="" />
					<div class="details">
						<div class="photographer">
							<i class="bx bx-camera"></i>
							<span class="photographer-name">${img.photographer}</span>
						</div>
						<button onclick="downloadImage('${img.src.large2x}')" class="download-image">
									<img src="images/Download.svg" alt="" />

						</button>
					</div>
				</li>`
		)
		.join('');

	const existingH5 = imagesCtn.querySelector('.display-image-text');
	if (!existingH5) {
		const h5 = document.createElement('h5');
		h5.innerHTML = `
						Wyniki wyszukiwania dla
						<span class="display-image-text-span">${name}</span>
						<img src="images/down-arrow.png" alt="" />
						
						`;

		h5.classList.add('display-image-text');
		imagesCtn.prepend(h5);
	}

	noPhotosContainer.classList.add('hide');
	loadBtn.classList.add('shown');
}
