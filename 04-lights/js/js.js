$(document).ready(function(){
	
var availableClasses = [ 'colour-red', 'colour-yellow', 'colour-blue' ];

function changeColourClass(newClass){			
	$('#light').attr('class', newClass);	
}

function getRandomNumber(current) {
	var random = current;
	while (random == current) {
		random = Math.floor(Math.random() * (availableClasses.length) );
	}	
	return random;
}


$(document).keydown(function(e) {		
   switch (e.which) {
   case 65: // A key
       verifyHit(0);
       break;
   case 83: // S key
       verifyHit(1);
       break;
   case 68:  // D key
       verifyHit(2);
       break;    
	}
	setNewColour();
});

function setNewColour()
{	
	currentColour = getRandomNumber(currentColour);	
	changeColourClass(availableClasses[currentColour]);
	$('#light').html(currentColour);
}

function verifyHit(input)
{
	if ( input == currentColour )
	{
		score +=1;
		$('#score').html(score);
	}
	turn++;
	$('#time').html(turn);
}

// Start

var score = 0;
$('#score').html(score);
var turn = 0;
$('#time').html(turn);
var currentColour = getRandomNumber(null);
setNewColour();



});