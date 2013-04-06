$(document).ready(function(){
	$('.menu').toggle( 
	    function() {
	    	console.log('click open');
	        $('#wrapper, #header').animate({ left: 160 }, 150);
	        $('.menu').addClass('active');
	    }, 
	    function() {
	    	console.log('click closed');
	        $('#wrapper, #header').animate({ left: 0 }, 150);
	        $('.menu').removeClass('active');
	    }
	);
});