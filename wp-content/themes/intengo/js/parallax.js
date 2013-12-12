window.plax = {
	'startVal' : 0,
	'scrollSpeed' : 1,
	'thresholds':{
		'page-id-5':{
			'header' : 0,
			'footerCeil' : 1330,
			'footerFloor' : 1600
		},
		'page-id-9':{
			'header' : 0,
			'footerCeil' : 2700,
			'footerFloor' : 2900
		},
		'page-id-14':{
			'header' : 0,
			'footerCeil' : 3162,
			'footerFloor' : 3403
		},
		'page-id-16':{
			'header' : 0,
			'footerCeil' : 1520,
			'footerFloor' : 1880
		},
		'page-id-84':{
			'header' : 0,
			'footerCeil' : 1449,
			'footerFloor' : 1745
		},
		'page-id-87':{
			'header' : 0,
			'footerCeil' : 348,
			'footerFloor' : 589
		}
	},
	getPageId: function(){
		return ($('body').attr('class').split(' ')[1] === "page") ? $('body').attr('class').split(' ')[2] : $('body').attr('class').split(' ')[1];
	},
	getfooterFloor: function(pageId){
		return this.thresholds[pageId].footerFloor;
	},
	getFooterCeil: function(pageId){
		return this.thresholds[pageId].footerCeil;
	},
	targets: ['#parallax1', '#parallax2']
	//targets: ['#parallaxXXX', '#parallaxXXX']	//temporarily disabling the parallax, uncomment the previous line and comment this out to renable
};

jQuery(document).ready(function($) {
    a = parseFloat(plax.startVal); 								// Initial value for the first background (bk 0)

    var scrollTop   	= $(window).scrollTop(); 				//Get the initial Scroll value
    var pageId 			= plax.getPageId();

	var footerCeil 		= plax.getFooterCeil(pageId);
	var footerFloor 	= plax.getfooterFloor(pageId);

    $(window).scroll(function(){
		console.log('Y coord: ', getScrollTop());

		//When Scrolling up
        if(scrollingUp(scrollTop))
        {
			// Identifies the position for the first background when a scroll event occurs
            if(getScrollTop() <= footerFloor && getScrollTop() >= 0)
            {
                    a = a + plax.scrollSpeed;// Position for the first background, it decreases in 3plax.scrollSpeed pixels
                    $(plax.targets[0]).css('backgroundPosition', '0' + a +'px');
            }
			if(getScrollTop() <= footerFloor && getScrollTop() >= 0)
			{
                    a = a + plax.scrollSpeed;
					var xPos = Number($(plax.targets[1]).css('backgroundPosition').split(" ")[0].split('%')[0])
					var yPos = Number($(plax.targets[1]).css('backgroundPosition').split(" ")[1].split('px')[0]);
                    $(plax.targets[1]).css('backgroundPosition', '0' + a +'px');
            }
        } else {
			//When Scrolling down
			//when you reach 1000px down slide the cta's up
			if (getScrollTop() >= 1000){
				$('.inner #cta-group-home1 .inner').slideUp(150);
			}

            if (getScrollTop() >= 0 && getScrollTop() <= footerFloor)
            {
                  a = a - plax.scrollSpeed; 	// Position for the first background, it decreases in x #of pixels ( 5 in this case )
                  $(plax.targets[0]).css('backgroundPosition', '0' + a +'px');
            }
			if (getScrollTop() >= footerCeil && getScrollTop() <= footerFloor)
            {
                 a = a - plax.scrollSpeed; 	// Position for the first background, it decreases in x #of pixels ( 5 in this case )
                 $(plax.targets[1]).css('backgroundPosition', '0' + a +'px');
            }
        }

		// Adjusts the positions values and resets them to zero during a scroll up event
        if (getScrollTop() == 0)
        {
            a=parseFloat(plax.startVal);
            $('#parallax1, #parallax2').css('backgroundPosition', '0 0');
        }

        //scrollTop = $(this).scrollTop();
    });
});

/* Returns true if scrolling up
*/
function scrollingUp(scrollTop){
	return scrollTop > $(this).scrollTop();
}

//Returns the total sum in pixels of the whole page ( how far the top of the page is offset )
function getScrollTop(){
	// console.log('pageYOffset: ', pageYOffset);
    if(typeof pageYOffset!= 'undefined'){
        // Most browsers
        return pageYOffset;
    }
    else{
		//IE 'quirks'
        var B = document.body;
        var D = document.documentElement; //IE with doctype
         	D = (D.clientHeight)? D: B;
			return D.scrollTop;
    }
}

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