export default function showDownloadSuccess() {
	const succes = document.createElement('div');
	succes.classList.add('success-message');

	succes.innerHTML = `
	<h4>Pobrano Element</h4>
			<img src="images/success.png" alt="" />
	`;


	setTimeout(() => {
		succes.classList.add('active');
	}, 50);

		document.body.append(succes);

	setTimeout(() => {
		succes.classList.remove('active');
		setTimeout(() => succes.remove(), 300);
	}, 2010);
}
