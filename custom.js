$(function() {
	$( ".slide" ).live( "showoff:show", function(){
		$( ".sh_keyword:contains('this')" ).addClass( "this" );

		$( "pre" ).html(function( i, string ) {
			return string
				.replace("~~~", "<b>" )
				.replace("/~~~", "</b>" );

		});
	});
});
