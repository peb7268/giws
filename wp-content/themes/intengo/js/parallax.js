;(function($){
	$.plax = function(options){
		var self = $.plax;
		var message; var m; var pos; var $w = $(window);

		var settings = $.extend({
			//defaults
			'debug'		: true,
			'context'	: window,
			'pos': 0, 							// Initial Y staring value for the background position of each image.
			'elemHeight' : 245,					//How tall each element is ( will be unique per target but also here for a default )
			'scrollSpeed' : 1,					//Speed of parallax animation
			'headerFloor' : 245,				//Bottom of header, remove later once all elems are dynamic
			'scrollDirection' : 'down',			//direction of current scroll
			'targets' : {}						//Each element to have parallax applied
		}, options);

		self.init = function(){
			self.setWinTopY();					//current position of window Y top
			self.setWinBottomY(); 				//current position of window Y bottom

			m = message = function(){
				if(!settings.debug) return false;
				console.log.apply(console, arguments);
			}
			settings.pos 		= parseFloat(settings.pos);
			self.setupTargets(settings.targets);	//call this later
			self.checkForPreexistingElementsToParallax();
			self.setBindings();
			pos = settings.pos;
			//m('init called', settings)
		};

		self.checkForPreexistingElementsToParallax = function(){
			for(name in settings.targets){
				var target 	= settings.targets[name];
				var $elem 	= $(target.selector);
				var winBottomY = settings.winBottomY;

				//Check if a preexisting element should be parallaxed
				if(self.elementIsOnPage(target)) self.pan($elem);
			}
		};
		/*
		* Check if the element is on the page. ( Need to accound for header still )
		*/
		self.elementIsOnPage = function(target){
			return (settings.winTopY <= target.ceiling && settings.winBottomY >= target.floor) ? true : false;
		}
		self.setupTargets = function(targets){
			var t = {};
			$.each(targets, function(idx, elem){
				t[elem] = {};
				var selector 	= t[elem].selector = '#' + elem;
				var height   	= t[elem].height = $(selector).outerHeight();
				t[elem].ceiling = $(selector).offset().top;
				t[elem].floor 	= t[elem].ceiling + height;
				t[elem].calculatedHeight = t[elem].floor  - t[elem].ceiling;	//just a check, should match height
				if(t[elem].calculatedHeight !== height) console.error(selector + ' calculations are off based on calculated height.');
			});
			settings.targets = t;
		}

		self.setBindings = function(){
			//set all bindings here
			$that = $(settings.context);
			$that.scroll(self.scroll);
		}

		self.scroll = function(e){
			self.setWinBottomY();		//update winBottomy
			self.setWinTopY();			//update winTopy
			self.setScrollDirection();
			self.checkForPreexistingElementsToParallax();
			self.checkElements('winBottomY')		//determine if any elements need to be parallaxed
		};
		/*
		* On scroll, checks if any elements need to be parallaxed.
		* Based on the bottom of the page.
		*/
		self.checkElements = function(windowPosition){
			//TODO: only works for winBottomY right now, make work for winTopY also.
			for(name in settings.targets){
				var target 		= settings.targets[name];
				var $element 	= $(target.selector);
				var winBottomY 	= settings.winBottomY;

				//Check if the element should be parallaxed
				//console.log(settings.winTopY <= target.ceiling && settings.winBottomY >= target.floor);
				if(settings[windowPosition] >= target.ceiling && settings[windowPosition] <= target.floor){
					m(name + ' is ready for some sexy parallax');
					//parallaxUp or parallaxDown here
					self.pan($element);
				}

			}
		};
		/*
		* Dynamically Delegates to one of the scroll methods.
		*/
		self.pan = function($element){
			var direction  = settings.scrollDirection.charAt(0).toUpperCase() + settings.scrollDirection.slice(1);
			var method = 'pan' + direction;
			self[method]($element);
		};
		self.panDown = function($element){
			m('panning down');
			pos = pos - settings.scrollSpeed;
			$element.css('backgroundPosition', '0' + ' ' + pos +'px');
		};
		self.panUp = function($element){
			m('panning up');
			pos = pos + settings.scrollSpeed;
			$element.css('backgroundPosition', '0' + ' ' + pos +'px');
		};
		self.setScrollDirection = function(){
			var direction 	= settings.scrollDirection;
			var winBottomY 	= settings.winBottomY;

			var timerId = window.setTimeout(function(){
				settings.newWinBottomY = settings.winBottomY;
			}, 100);

			direction = (winBottomY > settings.newWinBottomY) ? 'down' : 'up';
			settings.scrollDirection = direction;
		};

		self.setWinTopY = function(){
			if(typeof pageYOffset!= 'undefined'){
		        // Most browsers
				settings.winTopY = pageYOffset;
		    } else{
				//IE 'quirks'
		        var B = document.body;
		        var D = document.documentElement; //IE with doctype
		         	D = (D.clientHeight)? D: B;
					settings.winTopY = D.scrollTop;
		    }
			//m('window top: ', settings.winTopY);
		};

		self.setWinBottomY = function(){
			settings.winBottomY = $w.scrollTop()  + $w.height();
			//m('window bottom: ',settings.winBottomY);
		};

		self.getSettings = function(){
			return settings;
		};

		//Kickoff
		self.init();
		return this;
	}
}(jQuery));