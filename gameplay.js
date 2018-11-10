// Controls the creation of the player and map 
// when working with individual levels 
// in the game
// Controls the creation of the player and map 
// when working with individual levels 
// in the game
$(document).ready(function () {
  var $mapElement = $('.map');
  var pikachu = new Player(12, 6, {$elem: $mapElement, height: 18, width: 55, state: 'GAME'});
  pikachu.update();
  pikachu.bindHandlers();
  pikachu.bindGameHandlers();
  bindWinButtons();
});


var bindWinButtons = function() {
	$('.main-button').on('click', function() {
		window.location.href = 'index.html';
	})
	$('.level-2').on('click', function(){
		window.location.href = 'level2.html';
	})
}
