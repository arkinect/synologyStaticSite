$(document).ready(function () {
	var $menu = $(".tab_page");
	var $menu_a = $(".tab_page > a, #alt-date-scroll");
	var id = false;
	var sections = [];
	var hash = function(h) {
		if (history.pushState) {
			history.pushState(null, null, h);
		} else {
			location.hash = h;
		}
	};
	var sub_height = 140;
	var sub_height_for_scroll = 155;

	if($(window).width() < 767){
		sub_height = 240;
		sub_height_for_scroll = 255;
	}
	console.log(sub_height_for_scroll);
	$menu_a.click(function(event) {
		var str = $(this).attr("href");
		var slug = str.split('#').pop();
		$("html, body").animate(
			{
				scrollTop: $("#"+slug).offset().top - sub_height
			},
			{
				duration: 700,
				complete: hash($(this).attr("href"))
			}
		);
	});

	$menu_a.each(function() {
		sections.push($(this).attr("href"));
	});


	$(window).bind('scroll', function() {
		var currentTop = $(window).scrollTop();
		var elems = $('.common-scroll');
		elems.each(function(index){
			var elemTop 	= $(this).offset().top - sub_height_for_scroll;
			var elemBottom 	= elemTop + $(this).height();
			if(currentTop >= elemTop && currentTop <= elemBottom){
				var id 		= $(this).attr('id');
				var navElem = $('.tab_page a[href="#' + id+ '"]');
				navElem.addClass('active').siblings().removeClass( 'active' );
			}
		})
	});
});
