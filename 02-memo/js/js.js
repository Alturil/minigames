$(document).ready(function(){

// var cardContent = [
// 	'<img src="http://placekitten.com/200/311" />',
// 	'<img src="http://placekitten.com/201/320" />',
// 	'<img src="http://placekitten.com/202/339" />',
// 	'<img src="http://placekitten.com/203/348" />',
// 	'<img src="http://placekitten.com/204/357" />',
// 	'<img src="http://placekitten.com/205/366" />',
// 	'<img src="http://placekitten.com/206/375" />',
// 	'<img src="http://placekitten.com/207/384" />',
// 	'<img src="http://placekitten.com/208/393" />',
// 	'<img src="http://placekitten.com/209/302" />',
// 	'<img src="http://placekitten.com/210/301" />',
// 	'<img src="http://placekitten.com/211/300" /'
// ]
var cardContent = [
	'<p>1</p>',
	'<p>2</p>',
	'<p>3</p>',
	'<p>4</p>',
	'<p>5</p>',
	'<p>6</p>',
	'<p>7</p>',
	'<p>8</p>',
	'<p>9</p>',
	'<p>10</p>',
	'<p>11</p>',
	'<p>12</p>'
]

// Need pairs, so duplicate the deck, then shuffle
cardContent = $.merge(cardContent, cardContent);
cardContent = Shuffle(cardContent);

// Based on Fisher-Yates shuffle. See: https://bost.ocks.org/mike/shuffle/
function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// Deal cards
function DealCards() {

	for (var i = 0; i < cardContent.length; i++) {
		$(".card:eq(" + i + ")").html('<div class="flipper"><div class="backCard"></div>\
				 					  <div class="frontCard">' + cardContent[i] + '</div></div>');
	}
}

DealCards();

//Bind click event
$(".card").click(function(){
	$(this).children().toggleClass("rotated");
});


});