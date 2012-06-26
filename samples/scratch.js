jQuery( "div" )
	.hide()
	.addClass( "foo" )
	.show();

var $divs = $( "div" );

$divs.map(function( i, elem ) {
  elem.setAttribute( "style", "display: none;" );
	return elem;
});

$divs.map(function( i, elem ) {
	var old = elem.getAttribute( "class" );
  elem.setAttribute( "class", "foo " + old );
	return elem;
});

$divs.map(function( i, elem ) {
  elem.setAttribute( "style", "display: block;" );
	return elem;
});

$divs.map(function( i, elem ) {
	var old = elem.getAttribute( "class" );
  elem.setAttribute( "style", "display: none;" );
  elem.setAttribute( "class", "foo " + old );
  elem.setAttribute( "style", "display: block;" );
	return elem;
});

// Html
// {HTMLDivElement}
document.querySelector( "div#sample" );

// {jQuery}
$( document.querySelector( "div#sample" ) );

// @param {HTMLElement} elem
// @returns {HTMLElement}
function setFoo( elem ) {
	elem.setAttribute( "class", "foo" );
	return elem;
}

// {HTMLDivElement}
setFoo( sample );

// {jQuery}
$( "#sample" ).setFoo();

function id( elem ) {
  return elem;
}

function cmps( f, g ) {
  return function( elem ) {
    return f(g(elem));
	};
}

function addOne( val ){
	return val + 1;
}

function addTwo( val ){
	return val + 2;
}

cmps( addTwo, addOne )( 0 );
// => 3

// Jqry

// {jQuery}
$( "#div-sample" );

// {jQuery}
$( "#div-sample" ).hide();

// @returns {jQuery}
jQuery.fn.id = function() {
  return this;
};

// Functor
$( "#div-sample" ).id();

// @param {HTMLElement} elem
// @returns {HTMLElement}
function setFoo( elem ) {
	elem.setAttribute( "class", "foo" );
	return elem;
}

$( "div" ).setFoo();

jQuery.map( $("div"), function setFoo( elem ) {
	elem.setAttribute( "class", "foo" );
	return elem;
});

$.fn.setFoo = function() {
	return jQuery.map( this, function( elem ) {
		elem.setAttribute( "class", "foo" );
		return elem;
	});
};


// use the map in f,g then compose
jQuery.fn.gf = jQuery.cmps( f, g );
$( "div" ).gf();

// compose first then use map
$( "div" ).map( cmps(f, g) );

// use the map in f,g then compose
jQuery.fn.gf = jQuery.cmps( f, g );
$( "div" ).g().f();

// compose first then use map
$( "div" ).map( cmps(f, g) );

$.fn.F = function(){
	return this.map(f);
};

$.fn.G = function(){
	return this.map(g);
};

jQuery.cmps = function( f, g ) {
  return function() {
    return f.apply(g.apply(this));
	};
};

// @returns {jQuery}
var g = jQuery.fn.g = function() {
	// manipulate `this`
	return this;
};

// @returns {jQuery}
var f = jQuery.fn.f = function(){
	// manipulate `this`
	return this;
};

// @returns {jQuery}
jQuery.fn.gf = jQuery.cmps(	f, g );

// {jQuery}
$( "#sample" ).g().f();

// {jQuery}
$( "#sample" ).gf();

document.querySelector( "div" );

function g( i, elem ) {
  elem.setAttribute( "class", "foo" );
	return elem;
};

function f( i, elem ) {
  elem.setAttribute( "style", "display: block;" );
	return elem;
};

$divs.map( cmps(f, g) );

jQuery.fn.addClass = function(){
	return this.map(function( elem ) {
		elem.setAttribute( "class", "foo" );
		return elem;
	});
};

jQuery.fn.show = function(){
	return this.map(show);
};

jQuery.fn.setFoo = function() {
	this.map(function setFoo( i, elem ) {
		elem.setAttribute( "class", "foo" );
		return elem;
	});
};

jQuery.fn.g.composable = g;

$( "div" ).f().g();

$( "div" ).map(
	$.fn.show.composable,
	$.fn.addClass.composable
);

$.fn.compose = function( f, g ) {
	if( f.composable && g.composable ){
		return this.map( cmps( f, g) );
	}

	throw "Oops!";
};

$( "div" ).compose(
	$.fn.show,
	$.fn.addClass
);