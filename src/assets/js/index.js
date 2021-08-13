window.onload = function() {
	// Variables
	var nav = document.querySelector('.sticky-header');
  // Functions
	// You can use toggle instead of add/remove
	function navFixed(e) {
		if(window.scrollY > 100) {
			nav.classList.add('is-sticky');
		} else {
			nav.classList.remove('is-sticky');
		}
	}

	// Event Listener
	window.addEventListener('scroll', navFixed);

}
