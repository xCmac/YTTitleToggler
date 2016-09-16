var $toggler = $("<input id=\"cb3\" type=\"checkbox\" class=\"tgl tgl-skewed\"/><label data-tg-off=\"OFF\" data-tg-on=\"ON\" for=\"cb3\" class=\"tgl-btn\"></label>", {id: "yttoggler"});
$toggler.click(function(){
	$("#watch-headline-title").toggle("slow");
});

$("#watch-header").prepend($toggler);