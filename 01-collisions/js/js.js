$(document).ready(function(){

	var Player = function() {
		this.element = $('#player');
		this.position = [];
		this.move = function(x, y) {
			this.position =  [x, y];
			$(this.element).css('left', x);
			$(this.element).css('top', y);			
		}
	}

	var Player = new Player();
	Player.move(200,300);
});