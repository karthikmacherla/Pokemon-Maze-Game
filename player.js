/*eslint-env browser */
/*globals $ */

// The size of a swatch (in pixels)
var SWATCH_SIZE = 25;
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

// Utility function - checks if a given swatch name is walkable terrain.
var isTerrain = function (swatchType) {
  return [
    'grass', 'flowers-red', 'flowers-orange', 'flowers-blue', 'weed', 'weed-4x',
    'weed-small', 'weed-2x', 'field', 'sand-patch', 'sand', 'sand-nw', 'sand-n',
    'sand-ne', 'sand-w', 'sand-e', 'sand-sw', 'sand-s', 'sand-se',
    'sand-nw-inverse', 'sand-ne-inverse', 'sand-sw-inverse', 'sand-se-inverse'
  ].indexOf(swatchType) >= 0;
};

/*
 * Constructor for the player (Pikachu sprite).
 *
 * @param x - The beginning x coordinate (usually zero)
 * @param y - The beginning y coordinate (usually zero)
 * @param builder - The MapBuilder object, with information about the map.
 * In particular, this builder object should have the container element
 * as a property so the '.map' div can be found using a jQuery 'find' call. 
 */
var Player = function (x, y, builder) {
  this.builder = builder;
  this.$map = builder.$elem;  
  this.player = $('<div>').addClass('player facing-down');
  this.x = x;
  this.y = y;
  
  this.update = function () {
    $('.map').append(this.player);
    this.player.css({left: this.x*SWATCH_SIZE, top: this.y* SWATCH_SIZE})
  } 

  this.bindHandlers = function () {
    var obj = this;
    $(document).on('keydown', function (e) {
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
      if (e.which == LEFT) {
        let orient = obj.player.attr('class');
        obj.player.removeClass(orient).addClass('player facing-left');
        if (obj.x != 0 && isValid(obj.x -1, obj.y)) obj.x--;
      }
      if (e.which == UP) {
        let orient = obj.player.attr('class');
        obj.player.removeClass(orient).addClass('player facing-up');
        if (obj.y != 0 && isValid(obj.x, obj.y-1)) obj.y--;
      }
      if (e.which == RIGHT) {
        let orient = obj.player.attr('class');
        obj.player.removeClass(orient).addClass('player facing-right');
        if (obj.x != builder.width-1 && isValid(obj.x +1, obj.y)) obj.x++;
      }
      if (e.which == DOWN) {
        let orient = obj.player.attr('class');
        obj.player.removeClass(orient).addClass('player facing-down');
        if(obj.y != builder.height-1 && isValid(obj.x, obj.y+1)) obj.y++;
      }
      (obj.player).css({left: obj.x*SWATCH_SIZE, top: obj.y* SWATCH_SIZE});
    });
  }
};


var isValid = function (x, y) {
  let $rows = $('.row');
  let $cols = $($rows[y]).children();       //when you extract an object from the array (jQuery obj)
  let elem = $cols[x];                      //it returns a DOM element. u need to use $(...) again. 
  let walk_list = '.grass, .flowers-red, .flowers-orange, .flowers-blue, .weed' + 
  '.weed-4x, .weed-small, .weed-2x, .sand-patch, .field, .plateau, .sand-n, .sand-w, .sand-e, .sand-s, .sand-nw, .sand-ne,' +
  '.sand-se, .sand-sw, .sand-nw-inverse, .sand-ne-inverse, .sand-sw-inverse, .sand-se-inverse';
  let ans = ($(elem).is(walk_list));
  return ans; 
}





