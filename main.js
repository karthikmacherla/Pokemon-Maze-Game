/*eslint no-unused-vars: 0 */
/*eslint-env browser */
/*globals $, MapBuilder, Player */

$(document).ready(function () {
  var $mapElement = $('#map-builder');
  var builder = new MapBuilder($mapElement, {state: 'DRAW'});
  builder.setupPalette();
  builder.setupMapCanvas();
  var pikachu = new Player(0, 0, {$elem: $('.map'), height: 18, width: 55});
  pikachu.update();
  pikachu.bindHandlers();
  if (builder.state == 'GAME') 
  	pikachu.bindGameHandlers();
});

