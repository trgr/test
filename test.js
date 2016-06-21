
$( window ).load(function()		{
	var f = document.getElementById("new-listing-link");
	f.innerHTML = "Selg gavekort";
                                        
//	var title = document.getElementById( "listing_title" )
//	title.style.display = "none";

	$('label[for="listing_title"]').hide ();
	
	var info = document.getElementById( "info-text-container" );
	$('label[for="listing_description"]').hide ();
	info.style.display = "none";
	
	var desc = document.getElementById( "listing_description" );

	desc.style.display = "none";
	
});
