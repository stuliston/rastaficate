jQuery Rastaficate
==================

Rastafication, for your nation.

This mind-bogglingly awesome, all-powerful jQuery plugin will take any collection of elements and 'rastaficate' them by colouring them green, gold and red in a cyclical fashion.

For a demonstration - please close your eyes and imagine the coolest thing you've ever seen, multiplied by 10. Alternatively, you can always check it out in action at http://stuliston.herokuapp.com.

Usage:

$(document).ready(function(){
  $('your_selector').rastaficate();
});

If you're a pro user and are *absolutely* sure you know what you're doing, you can override the default colours:

$(document).ready(function(){
  $('your_selector').rastaficate({
    'green' : '#46937D',
    'gold'  : '#C2B172',
    'red'   : '#F00003'
  });
});

TODO:
-----

 - Remove method chainability. If you need more JS API in your app than Rastaficate provides, you're doing it wrong.

Contributors to the cause:
--------------------------

 - Stu Liston
 - Mark Cipolla
 - Bob Marley
