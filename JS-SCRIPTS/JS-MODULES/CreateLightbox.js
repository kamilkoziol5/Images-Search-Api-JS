import downloadImage from './DownloadImage.js';
import createImageResizer from './Image-Resizer/createImageResizer.js';

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
          <button class="resize-image-btn">
          		<img src="images/Scale.svg" alt="">

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
	document.documentElement.classList.remove('no-scroll');

	setTimeout(() => {
		lightbox.classList.add('shown');
	}, 0);

	body.classList.remove('height');

	lightbox
		.querySelector('.close-lightbox-btn')
		.addEventListener('click', () => {
			lightbox.classList.remove('shown');
			body.classList.add('height');
			document.documentElement.classList.add('no-scroll');

			setTimeout(() => {
				lightbox.remove();
			}, 100);
		});

	lightbox.querySelector('.download-btn').addEventListener('click', e => {
		const btn = e.currentTarget;
		const src = btn.dataset.option;
		downloadImage(src);
	});

	lightbox.querySelector('.resize-image-btn').addEventListener('click', () => {
		const img = new Image();
		img.src = src;

		img.onload = () => {
			const width = img.naturalWidth;
			const height = img.naturalHeight;

			createImageResizer(src, width, height);
		};
	});
}

window.createLightbox = createLightbox;
export default createLightbox;
