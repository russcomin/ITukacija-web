//window.scrollTo(500, 0);

let preuzimanje = document.getElementById('preuzimanje');
	preuzimanje.addEventListener('click', executePrezuimanje);

	function executePrezuimanje() {
		window.scroll({
		  top: 800, 
		  left: 0, 
		  behavior: 'smooth' 
		});
	}

let uputstvo = document.getElementById('uputstvo');
	uputstvo.addEventListener('click', executeUputstvo);

	function executeUputstvo() {
		window.scroll({
		  top: 2450, 
		  left: 0, 
		  behavior: 'smooth' 
		});
	}	


let aplikacija = document.getElementById('aplikacija');
	aplikacija.addEventListener('click', executAaplikacija);

	function executAaplikacija() {
		window.scroll({
		  top: 1400, 
		  left: 0, 
		  behavior: 'smooth' 
		});
	}	