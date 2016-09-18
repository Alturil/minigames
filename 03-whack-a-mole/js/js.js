$(document).ready(function(){

	var growth = 20;
	var speed = 1000;

	$('.mole').click(function(){
		Grow(this);
	});


	function Grow(element) {
		$(element).stop().animate({
            height: '+=' + growth + 'vh'
        }, speed, "linear");
	}	

});