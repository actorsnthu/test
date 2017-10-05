/*
	Road Trip by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		var $height = $('#header').height();

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner

			if ($banner.length > 0) {

				// IE: Height fix.
					if (skel.vars.browser == 'ie'
					&&	skel.vars.IEVersion > 9) {

						skel.on('-small !small', function() {
							$banner.css('height', '100vh');
						});

						skel.on('+small', function() {
							$banner.css('height', '');
						});

					}

				// More button.
					$banner.find('.more')
						.addClass('scrolly');

			}


		// Get BG Image

			if ( $( ".bg-img" ).length ) {

				$( ".bg-img" ).each(function() {

					var post 	= $(this),
						bg 		= post.data('bg');

					post.css( 'background-image', 'url(images/' + bg + ')' );

				});


			}

		// Posts

			$( ".post" ).each( function() {
				var p = $(this),
					i = p.find('.inner'),
					m = p.find('.more');

				m.addClass('scrolly');

				p.scrollex({
					top: '40vh',
					bottom: '40vh',
					terminate: 	function() { m.removeClass('current'); i.removeClass('current'); },
					enter: 		function() { m.addClass('current'); i.addClass('current'); },
					leave: 		function() { m.removeClass('current'); i.removeClass('current'); }
				});

			});

		// Scrolly.
			if ( $( ".scrolly" ).length ) {

				$('.scrolly').scrolly();
			}

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});




		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	$(function(){
		$('#about').click(function(){
			$('html,body').animate({scrollTop: $('#one').offset().top},400);
		});
	});
	
	$(function(){
		$('#research').click(function(){
			$('html,body').animate({scrollTop: $('#four').offset().top},800);
		});
	});
	$(function(){
		$('#awards').click(function(){
			$('html,body').animate({scrollTop: $('#five').offset().top},800);
		});
	});
	$(function(){
		$('#a01').click(function(){
			$('html,body').animate({scrollTop: $('#one').offset().top},800);
		});
	});
	
		$(function(){
		$('#a02').click(function(){
			$('html,body').animate({scrollTop: $('#two').offset().top},800);
		});
	});
	
		$(function(){
		$('#a03').click(function(){
			$('html,body').animate({scrollTop: $('#three').offset().top},800);
		});
	});
	
		$(function(){
		$('#a04').click(function(){
			$('html,body').animate({scrollTop: $('#four').offset().top},800);
		});
	});
	
		$(function(){
		$('#a05').click(function(){
			$('html,body').animate({scrollTop: $('#five').offset().top},800);
		});
	});	
	

	});







})(jQuery);