$(document).ready(function(){

// <global variables>
var availableClasses = [ 'colour-red', 'colour-yellow', 'colour-blue' ];
var maxTime = 5;
var currentColour;
var score;
var time;
var timer;
// </global variables>

// <functions>
function getRandomNumber(current)
{
	var random = current;
	while (random == current) {
		// Math.random 				= Between 0 and 1
		// availableClasses.length 	= Max (total classes)
		// Math.floor				= Rounds downward to the nearest integer
		random = Math.floor(Math.random() * (availableClasses.length) );
	}	
	return random;
}

function changeLightColour(newClass)
{			
	$('#light').attr('class', newClass);
}

function setNewColour()
{	
	currentColour = getRandomNumber(currentColour);	
	changeLightColour(availableClasses[currentColour]);
	// $('#light').html(currentColour);
}

function updateUI()
{
	$('#score').html(score);
	$('#time').html(time);
	$('#score').html(score);
	console.log("Updating... " + time);
}

function verifyHit(input)
{
	if ( input == currentColour )
	{
		score++;
		updateUI();
	}
}

function countDown()
{
	if ( time > 0 )
	{
		time--;
		updateUI();
		console.log("Updated")
	}	
	if (time == 0)
	{		
		clearInterval(timer);
		alert("Game over!");
	}
}

function gameOver()
{

}
// </functions>

// Controls!
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


function start()
{
	score = 0;
	currentColour = getRandomNumber(null);
	setNewColour();	
	time = maxTime;	
	timer = setInterval(countDown,1000);
	updateUI();	
}

start();

});