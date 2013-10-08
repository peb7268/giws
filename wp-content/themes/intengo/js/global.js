(function($){
	$(document).ready(function($) {
		$('#nav li').hover(function(){
			$(this).parent().find('li').removeClass('active');
			$(this).addClass('active');
		}, function(){
			$('body:not("#nav"), header').hover(function(){
				$('#nav li').removeClass('active');
			});
		});
	});
	var $navToggle 	= $('#navControl');
	var $nav 		= $('#nav');
	$navToggle.on('click', function(){
		$nav.slideToggle(100);
	});
})(jQuery)