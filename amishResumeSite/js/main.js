$( document ).ready(function() {
	$('nav a').click(function(){
	    $('body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
});