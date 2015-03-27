$(document).foundation({
	// orbit slider
	orbit: {
		next_class: 'orbit-next', // Class name given to the next button
      	prev_class: 'orbit-prev', // Class name given to the previous button
	}
});

$(document).ready(function(){
  	$('.bxslider').bxSlider({
  		auto: true,
  		randomStart: true,
  		autoHover: true,
  	});
});
