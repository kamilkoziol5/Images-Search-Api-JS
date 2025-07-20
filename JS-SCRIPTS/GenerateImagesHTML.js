import downloadImage from './DownloadImage.js';
import createLightbox from './CreateLightbox.js';
import showSearchAlert from './ShowSearchAlert.js';

export function GenerateImagesHTML(images, name) {
	const imagesCtn = document.querySelector('.display-image-container');
	const imagesWrapper = document.querySelector('.display-image-wrapper');
	const noPhotosContainer = document.querySelector('.no-photos-container');
	const loadBtn = document.querySelector('.load-more');

	images.forEach(img => {
		const li = document.createElement('li');
		li.classList.add('card', 'grid-item');

		li.setAttribute(
			'onclick',
			`createLightbox('${img.photographer}', '${img.src.large2x}')`
		);

		li.innerHTML = `
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
	`;

		imagesWrapper.appendChild(li);
	});

	if (imagesWrapper.children.length === 0) {
		showSearchAlert('The entered phrase could not be found.');
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

	const grid = document.querySelector('.grid');
	const masonry = new Masonry(grid, {
		itemSelector: '.grid-item',
		columnWidth: '.grid-item',
		gutter: 16,
		percentPosition: true,
	});

	imagesLoaded(grid, function () {
		masonry.layout();
	});
}

export default GenerateImagesHTML;
