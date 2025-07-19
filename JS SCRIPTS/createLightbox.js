import { downloadImage } from './DownloadImage.js';

export function createLightbox(name, src) {
	const body = document.querySelector('body');
	const lightbox = document.createElement('div');
	lightbox.classList.add('lightbox-container');

	lightbox.innerHTML = `
    <div class="lightbox-wrapper">
      <div class="lightbox-header">
        <div class="left-side">
          <i class="bx bx-camera"></i>
          <span class="photographer-name">${name}</span>
        </div>
        <div class="right-side">
          <button data-option='${src}' class="download-btn">
        <img src="images/Download2.svg" alt="" />
          </button>
          <button class="close-lightbox-btn">
            <img src="images/Delete.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="lightbox-image">
       <div class="img"> <img src="${src}" alt="" /> </div>
      </div>
    </div>
  `;

	body.appendChild(lightbox);
	console.log('hrllo');

	setTimeout(() => {
		lightbox.classList.add('shown');
	}, 0);

	body.classList.remove('height');

	lightbox
		.querySelector('.close-lightbox-btn')
		.addEventListener('click', () => {
			lightbox.classList.remove('shown');
			body.classList.add('height');

			setTimeout(() => {
				lightbox.remove();
			}, 100);
		});

	lightbox.querySelector('.download-btn').addEventListener('click', e => {
		const btn = e.currentTarget;
		const src = btn.dataset.option;
		downloadImage(src);
	});
}

window.createLightbox = createLightbox;
