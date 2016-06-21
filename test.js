
$( window ).load(function()		{
	var f = document.getElementById("new-listing-link");
	f.innerHTML = "Selg gavekort";
	
	$('label[for="listing_title"]').hide ();

	$("#info-text-container").hide();
	
	$('label[for="listing_description"]').hide ();

	$("#listing_description").hide();	
	
});
