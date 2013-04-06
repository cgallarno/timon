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


	var top5, data;
	$.ajax({
	  dataType: "json",
	  url: 'json/top5.json',
	  success: function(data){ console.log('data success', data); }
	});

	// json url // http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=us&f_has_lyrics=1&apikey=77c10d76539a2b7e2a62a7113bf1282d&callback=?

	console.log('after', data);
});