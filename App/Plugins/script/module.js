$(document).ready(function(){
	console.log('item', $('.menu'));

	$(document).on('click', '.menu', function(e){
		if($(this).hasClass('active')){
			//close
			$('#wrapper, #header').animate({ marginLeft: 0 }, 150);
	        $('.menu').removeClass('active');
		}else{
			//open
			$('#wrapper, #header').animate({ marginLeft: 160 }, 150);
	        $('.menu').addClass('active');
		}
		e.preventDefault();

	});

});

