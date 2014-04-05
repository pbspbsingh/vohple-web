$(function() {
	var $window = $(window);
	{	// Slider of home page
		var $slider = $('#slider');
		$slider.css('height', $window.height() + 'px');
		
		var $navArrows = $('#nav-arrows');
		var slitslider = $slider.slitslider();
		$navArrows.children(':last').on('click', function() {
			slitslider.next();
			return false;
		});
		$navArrows.children(':first').on('click', function() {
			slitslider.previous();
			return false;
		});
		setInterval(function(){slitslider.next();}, 3000);
		$window.resize(function() {
			$slider.css('height', $window.height() + 'px');
		});
	}
	$('#top-scroll-bar > a').addClass('animated pulse');
	$('#mainMenu').waypoint('sticky');
	var menu = $('ul.menu');
	$('#content > article').waypoint(function(dir){
		var article = $(this);
		if(dir=="down") {
			var animatedNodes = article.find('[data-anim]');
			animatedNodes.each(function(){
				var self = $(this);
				self.addClass('animated ' + self.data('anim'));
				self.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					self.removeClass('animated ' + self.data('anim'));
				});
			});
		}
		{
			menu.children('li').removeClass('current');
			menu.children('li').each(function(){
				var anchor = $(this).children('a');
				if(anchor.attr('href') == '#' + article.attr('id')) {
					$(this).addClass('current');
				}
			});
		}
	}, { offset: 65 });
	
	$('body').on('click', 'a', function(event){
		var href = this.getAttribute('href');
		if(href && href.charAt(0)=='#') {
			var id = href.substring(1);
			id = $('#'+id);
			if(id) {
				event.preventDefault();
				$.scrollTo(id, 800);
			}
		}
	});
});