$(document).ready(function(){
	$(document).keydown(function(key) {
        	switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('div').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				// Put our code here
				$('div').animate({top: '-=10px'}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				// Put our code here
				$('div').animate({left: '+=10px'}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				// Put our code here
				$('div').animate({top: '+=10px'}, 'fast');
				break;
		}
	});

	$('div').hover(function(){
		$(this).css('background-color', 'red');
	});

	$('div').dblclick(function(){
        	$(this).fadeOut('fast');
    	});

});