$(document).ready(function() {
	$('.menu-opener').on('click', function(e) { 
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active') 
	})
})