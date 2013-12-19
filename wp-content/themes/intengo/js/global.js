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

	var oHeight = - Number($('#headerWrapper').outerHeight());
	$.localScroll.hash({
		axis: 'y',
		queue:true,
		duration:1500,
		offset: oHeight,
	});

	//LocalScroll
	$.localScroll({
		axis: 'y',
        queue: true,
        duration: 1500,
        offset: oHeight,
        hash: true
	});

	//Kickoff the parallax
	$.plax({
		'targets' : ['parallax1', 'parallax2']
	});

	var $navToggle 	= $('#navControl');
	var $nav 		= $('#nav');
	$navToggle.on('click', function(e){
		e.preventDefault();
		$nav.slideToggle(100);
	});

	//Modal Popup
	if($('.modal').length > 0){
	    var $modal = $('.modal');

	    $('a.ctaButton').on('click', function(e){
	            e.preventDefault();
	            $modal.css('top',  getScrollTop() + 250 + 'px').fadeIn(100);
	    });
	    $modal.find('a.close').on('click', function(e){
	            e.preventDefault();
	            $modal.fadeOut(100);
	    });
	}
});