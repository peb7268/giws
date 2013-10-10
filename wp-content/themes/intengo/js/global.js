(function($){
	$(document).ready(function($) {
		$lis  = $('#nav li:not("ul.sub-nav li")');
		$subs = $lis.find('ul.sub-nav, .seperator');

		$lis.hover(function(){
			$subs.hide();
			$(this).parent().find('li').removeClass('active');
			$(this).addClass('active').find('.sub-nav, .seperator').removeAttr('style');
		}, function(){
			$('body:not("#nav"), header').hover(function(){
				$lis.removeClass('active');
				$subs.hide();
			});
		});
	});
	var $navToggle 	= $('#navControl');
	var $nav 		= $('#nav');
	$navToggle.on('click', function(){
		$nav.slideToggle(100);
	});
})(jQuery)