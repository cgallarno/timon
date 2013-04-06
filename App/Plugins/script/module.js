$(document).ready(function(){
	$('.menu').toggle( 
	    function() {
	        $('#wrapper, #header').animate({ left: 160 }, 150);
	        $('.menu').addClass('active');
	    }, 
	    function() {
	        $('#wrapper, #header').animate({ left: 0 }, 150);
	        $('.menu').removeClass('active');
	    }
	);
});

