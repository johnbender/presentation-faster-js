jQuery( "div" )
	.hide()
	.addClass( "foo" )
	.show();

var $divs = $( "div" );

$divs.each(function( i, elem ) {
  elem.setAttribute( "style", "display: none;" );
});

$divs.each(function( i, elem ) {
  elem.setAttribute( "class", "foo" );
});

$divs.each( $divs, function( elem ) {
  elem.setAttribute( "style", "display: block;" );
});

$divs.each(function( i, elem ) {
  elem.setAttribute( "style", "display: none;" );
  elem.setAttribute( "class", "foo" );
  elem.setAttribute( "style", "display: block;" );
});
