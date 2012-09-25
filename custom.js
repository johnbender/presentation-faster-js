$(function() {
	$( ".slide" ).live( "showoff:show", function(){
		$( ".sh_keyword:contains('this')" ).addClass( "this" );

		$( "pre" ).html(function( i, string ) {
			return string
				.replace("~~~*", "<span class='folder'>" )
				.replace("/*~~~", "</span>" )
				.replace("~~~@", "<span class='branch'>" )
				.replace("/@~~~", "</span>" )
				.replace("~~~", "<b>" )
				.replace("/~~~", "</b>" );

		});
	});
});
