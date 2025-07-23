import changeSize from './changeSize.js';
import downlaodImage from './downloadImage.js';

export default function createImageResizer(src, width, height) {
	const div = document.createElement('div');
	div.classList.add('container');
	div.innerHTML = `
    	<div class="upload-box">
		 <button  class="close-resize-btn">
            <img src="images/Delete.svg" alt="" />
          </button>
				<input type="file" accept="image/*" hidden />
					<img class="resized-img" src="${src}" alt="" />
				</div>
				<div class="content">
					<div class="row-sizes">
						<div class="column width">
							<label for="width-input">Width</label>
							<input type="number" id="width-input" />
						</div>
						<div class="column height">
							<label for="height-input">Height</label>
							<input type="number" id="height-input" />
						</div>
					</div>
					<div class="row-checkboxes">
						<div class="column ratio">
							<label>
								<input id="ratio-input" type="checkbox" checked/>
								<span class="checkmark"></span>
								Look aspect ratio
							</label>
						</div>
						<div class="column quality">
							<label>
								<input id="quality-input" type="checkbox" />
								<span class="checkmark"></span>
								Reduce quality
							</label>
						</div>
					</div>

					<button class="download-btn">Download Image</button>
				</div>
    `;

	const widthInput = div.querySelector('#width-input');
	const heightInput = div.querySelector('#height-input');
	const qualityInput = div.querySelector('#quality-input');
	const deleteBtn = div.querySelector('.close-resize-btn');
	const downlaodBTn = div.querySelector('.download-btn');

	let ogImageRatio = width / height;
	widthInput.value = width;
	heightInput.value = height;

	widthInput.addEventListener('keyup', () => {
		if (!ogImageRatio) return;
		changeSize(ogImageRatio, 'height');
	});

	heightInput.addEventListener('keyup', () => {
		if (!ogImageRatio) return;
		changeSize(ogImageRatio, 'width');
	});

	deleteBtn.addEventListener('click', () => {
		div.classList.remove('active');

		div.addEventListener(
			'transitionend',
			() => {
				div.remove();
			},
			{ once: true }
		);
	});

	downlaodBTn.addEventListener('click', () => {
		downlaodImage(widthInput.value, heightInput.value, qualityInput, src);
	});

	document.body.append(div);

	requestAnimationFrame(() => {
		div.classList.add('active');
	});
}
