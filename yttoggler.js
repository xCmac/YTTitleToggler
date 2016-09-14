var $div = $("<div><p>YTToggler</p></div>", {id: "yttoggler"});
$div.click(function(){
	$("#watch-headline-title").toggle("slow");
});

$("#watch-header").prepend($div);