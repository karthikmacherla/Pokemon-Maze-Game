/*eslint-env browser */
/*globals $ */

// Default size of map (in tiles)
var DEFAULT_WIDTH = 55;
var DEFAULT_HEIGHT = 18;

var MapBuilder = function ($container, params) {
  // TODO: Initialize MapBuilder parameters
  
  this.$elem = $('.map');
  this.$container = $container;

  if(params && params.width) this.width = params.width;
  else this.width = DEFAULT_WIDTH;

  if (params && params.height) this.height = params.height;
  else this.height = DEFAULT_HEIGHT;

  if(params && params.state) this.state = params.state;

  this.current = null;
};


// TODO: Implement MapBuilder.setupPalette()
MapBuilder.prototype.setupPalette = function setupPalette () {
    $('li').on('click', function () {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    })
  }
// TODO: Implement MapBuilder.setupMapCanvas
MapBuilder.prototype.setupMapCanvas = function setupPalette () {
  for (var i = 0; i < this.height; i++) {
    let $grassRow = $('<div>');
    $grassRow.addClass('row');
    $('.map').append($grassRow);
    for (var j = 0; j < this.width; j++) {
    let $grassBlock = $('<div>');
      $grassBlock.addClass('tile swatch grass');
      $grassRow.append($grassBlock);
      if (this.state == 'DRAW') 
        bindHandlers($grassBlock);
    }
  }
}

var bindHandlers = function ($grassBlock) {
  //declares selected swatch's classes. 
  $grassBlock.on('mouseenter', function () {
    var s = $('.selected').attr('class');
    this.current = $(this).attr('class');
    $(this).removeClass(this.current);
    $(this).addClass(s).removeClass('selected');
  })
  $grassBlock.on('mouseout', function(e) {
    let s = $('.selected').attr('class');
    if (e.which === 1) this.current = s;
    $(this).removeClass(s).addClass(this.current)
  });
  $grassBlock.on('mousedown', function (){
    this.current = $('.selected').attr('class');
  })
}





