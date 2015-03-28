$(document).foundation({
	// orbit slider
	orbit: {
		next_class: 'orbit-next', // Class name given to the next button
      	prev_class: 'orbit-prev', // Class name given to the previous button
	}
});

$(document).ready(function(){

    // bx-slider

  	$('.bxslider').bxSlider({
  		auto: true,
  		randomStart: true,
  		autoHover: true,
  	});

    // fakeLoader.js

    $("#fakeLoader").fakeLoader({
      timeToHide:7000, //Time in milliseconds for fakeLoader disappear
      zIndex:"999",//Default zIndex
      spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
      bgColor:"#44C0C2", //Hex, RGB or RGBA colors
      // imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
    });
});
