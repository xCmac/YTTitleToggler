var $toggler = $("<input id=\"cb3\" type=\"checkbox\" class=\"tgl tgl-skewed\"/><label data-tg-off=\"HIDE\" data-tg-on=\"SHOW\" for=\"cb3\" class=\"tgl-btn\"></label>", {id: "yttoggler"});

$toggler.change(function() {
	$("#watch-headline-title").toggle();        
});

$("#watch-header").prepend($toggler);