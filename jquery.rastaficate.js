/*!
 * Ground-breaking jQuery plugin to Rastaficate a bunch of elements
 • Written by Stuart Liston
 * Licensed under the MIT license
 */

(function( $ ){

  $.fn.rastaficate = function( options ) {

    // sane rastafarianistical defaults
    var settings = $.extend( {
      'green'   : '#078930',
      'gold'    : '#FCDD09',
      'red'     : '#DA121A'
    }, options);

    var rasta_colours = [ settings['green'], settings['gold'], settings['red'] ];

    return this.each(function(index) {
      $(this).css('color', rasta_colours[ index % rasta_colours.length ]);
    });

  };
})( jQuery );