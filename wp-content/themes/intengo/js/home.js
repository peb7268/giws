(function($){
	$(document).ready(function($) {
		$('#cta-group-home1 li').hover(
			function(){
				$(this).find('.inner').slideDown(100);
			},
			function(){
				$(this).find('.inner').slideUp(100);
			}
		);
		$('#cta-group-home1 li').on('click', function(){
			var that = this;
			$(that).find('.inner').slideToggle(100);
		});
	});
})(jQuery)