
// HEADER STICKY

window.onload = function() {

	var nav = document.querySelector('.sticky-header');
	function navFixed(e) {
		if(window.scrollY > 100) {
			nav.classList.add('is-sticky');
		} else {
			nav.classList.remove('is-sticky');
		}
	}
	window.addEventListener('scroll', navFixed);
}


var toggle = document.querySelector('.toggle');
var menuMobile = document.querySelector('.offcanvas-modal');
var closeBtn = document.querySelector('button.btn-close');

toggle.onclick = function() {
	menuMobile.classList.toggle('show');
}

closeBtn.onclick = function() {
	menuMobile.classList.remove('show');
}
