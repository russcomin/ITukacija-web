//window.scrollTo(500, 0);

let button_start = document.getElementById('button-start');
	button_start.addEventListener('click', executePrezuimanje);

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

let modal = document.getElementById('menu-modal');
let cancel = document.getElementById('cancel');
let wrapper = document.getElementById('wrapper');

var elements = document.getElementsByTagName("*");

let modal_btn = document.getElementById('menu-button');
	modal_btn.addEventListener('click', openModal);

	function openModal() {
		modal.style.transition = '.9s';
		modal.style.top = '0px';
		wrapper.style.overflowX = "hidden";
	}

cancel.addEventListener('click', closeModal);

	function closeModal() {
		modal.style.transition = '.9s';
		modal.style.top = '-2500px';
	}	

let pre = document.getElementById('pre-small');
	pre.addEventListener('click', execute_small_pre);

	function execute_small_pre() {
		window.scroll({
		  top: 600, 
		  left: 0, 
		  behavior: 'smooth' 
		});
		closeModal();
	}

let app = document.getElementById('app-small');
	app.addEventListener('click', execute_app_small);

	function execute_app_small() {
		window.scroll({
		  top: 1050, 
		  left: 0, 
		  behavior: 'smooth' 
		});
		closeModal();
	}	

let up = document.getElementById('up-small');
	up.addEventListener('click', execute_up_small);

	function execute_up_small() {
		window.scroll({
		  top: 1520, 
		  left: 0, 
		  behavior: 'smooth' 
		});
		closeModal();
	}

//downloads 

let win64;

	win64 = document.getElementById('win-64');
	win64.addEventListener('click', function() { document.location = "https://www.dropbox.com/s/1zsfsdnxqwii1pr/ITukacija.rar?dl=0"; })	
