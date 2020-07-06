(function ($) {

	"use strict";
	var pobNum = 0;
	var timeoutPlayPobNum = 0;
	$(window).on("load", function () {

		// Page loader

		$("body").imagesLoaded(function () {
			$(".page-loader div").fadeOut();
			$(".page-loader").delay(500).fadeOut("slow");
		});

		init_scroll_navigate();

		$(window).trigger("scroll");
		$(window).trigger("resize");

		// Hash menu forwarding
		if ((window.location.hash) && ($(window.location.hash).length)) {
			var hash_offset = $(window.location.hash).offset().top;
			$("html, body").animate({
				scrollTop: hash_offset
			});
		}

	});
	$(document).ready(function () {

		$(window).trigger("resize");
		init_menu();
		init_parallax();
		init_ProjectFilter();
		init_masonry();
		init_lightbox();
		init_scrolltop();
		init_productzoom();
		init_tooltip();
		init_wow();
		setTimeout(PlayAppSection, 2000);
		tab_init();
		equalizeHeight();

		// Responsive video
		$(".video, .blog-media").fitVids();
		$(".work-full-media").fitVids();

		//Right sidebar Sub Menu Trigger
		$('.sn-main-menu li a.sub-menu-trigger').on('mouseenter', function (a) {
			$(this).next('.sub-menu').stop().slideDown(800);
		});
		$('.sn-main-menu li').on('mouseleave', function (a) {
			$('.sub-menu').stop().slideUp(800);
		});

		var l = $(".fullscreen-menu"),
			d = $(".fullscreen-toggle-btn");
		d.on("click", function (a) {
			l.hasClass("fullscreen-menu-show") ? l.removeClass("fullscreen-menu-show") : l.addClass("fullscreen-menu-show"), a
				.stopPropagation()
		}), d.on("click", function () {
			d.hasClass("fullscreen-toggle-hide") ? d.removeClass("fullscreen-toggle-hide") : d.addClass(
				"fullscreen-toggle-hide")
		}), $(document).on("click", function () {
			l.hasClass("fullscreen-menu-show") && (l.removeClass("fullscreen-menu-show"), d.removeClass(
				"fullscreen-toggle-hide"))
		});

	});

	$(window).on("resize", function () {

		init_menu_resize();
		js_hight_fullscreen();
		equalizeHeight();

	});
	/* --------------------------------------------
     Platform detect
     --------------------------------------------- */
	var mobileTest;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		mobileTest = true;
		$("html").addClass("mobile");
	} else {
		mobileTest = false;
		$("html").addClass("no-mobile");
	}

	var mozillaTest;
	if (/mozilla/.test(navigator.userAgent)) {
		mozillaTest = true;
	} else {
		mozillaTest = false;
	}
	var safariTest;
	if (/safari/.test(navigator.userAgent)) {
		safariTest = true;
	} else {
		safariTest = false;
	}

	// Detect touch devices    
	if (!("ontouchstart" in document.documentElement)) {
		document.documentElement.className += " no-touch";
	}
	/* ==============================================
	Sections background
	=============================================== */
	var pageSection = $(".page-section, .idea-item.bg-img,.expertise-bg,.split-pane");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});

	/* ==============================================
	Navigation classic
	=============================================== */

	var mobile_nav = $(".mobile-nav");
	var desktop_nav = $(".large-nav");

	/* ==============================================
	Navigation resize
	=============================================== */
	function init_menu_resize() {

		// Mobile menu max height
		$(".small-device-menu .large-nav > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px");

		// Mobile menu style toggle
		if ($(window).width() <= 1024) {
			$(".main-nav").addClass("small-device-menu");

			$(".main-nav-mobile").removeClass("dt-mobile-nav"); //For sidebar menu
			$(".cd-right-content").removeClass("sidebar-section"); //For sidebar menu
			$(".dt-sidebar").hide(); //For sidebar menu

		} else
		if ($(window).width() > 1024) {
			$(".main-nav").removeClass("small-device-menu");

			$(".main-nav-mobile").addClass("dt-mobile-nav"); //For sidebar menu							
			$(".cd-right-content").addClass("sidebar-section"); //For sidebar menu
			$(".dt-sidebar").show(); //For sidebar menu					

			desktop_nav.show();
		}
	}

	/* ==============================================
	Nav line height
	=============================================== */
	function menu_line_height(height_initial, height_after) {
		height_initial.height(height_after.height());
		height_initial.css({
			"line-height": height_after.height() + "px"
		});
	}

	// Function equal height
	! function (a) {
		a.fn.equalHeights = function () {
			var b = 0,
				c = a(this);
			return c.each(function () {
				var c = a(this).innerHeight();
				c > b && (b = c)
			}), c.css("height", b)
		}, a("[data-equal]").each(function () {
			var b = a(this),
				c = b.data("equal");
			b.find(c).equalHeights()
		})
	}(jQuery);
	/* ==============================================
	Nav initialization
	=============================================== */

	function init_menu() {

		// Navbar sticky

		$(".sticky").sticky({
			topSpacing: 0
		});

		menu_line_height($(".nav-wrapper > ul > li > a"), $(".main-nav"));
		menu_line_height(mobile_nav, $(".main-nav"));

		mobile_nav.css({
			"width": $(".main-nav").height() + "px"
		});

		// Transpaner menu

		if ($(".main-nav").hasClass("transparent")) {
			$(".main-nav").addClass("nav-transparent");
		}

		// On scroll nav height change
		$(window).scroll(function () {
			if ($(window).scrollTop() > 10) {
				$(".nav-transparent").removeClass("transparent");
				$(".main-nav, .header-logo-wrap .logo, .mobile-nav").addClass("small-height");
			} else {
				$(".nav-transparent").addClass("transparent");
				$(".main-nav, .header-logo-wrap .logo, .mobile-nav").removeClass("small-height");
			}
		});

		// Mobile menu toggle

		mobile_nav.on("click", function (a) {
			if (desktop_nav.hasClass("menu-opened")) {
				desktop_nav.slideUp("slow", "easeOutExpo").removeClass("menu-opened");
				$(this).removeClass("active");
			} else {
				desktop_nav.slideDown("slow", "easeOutQuart").addClass("menu-opened");
				$(this).addClass("active");

				if ($(".main-nav").hasClass("not-top")) {
					$(window).scrollTo(".main-nav", "slow");
				}
			}

		});

		desktop_nav.find("a:not(.menu-down)").on("click", function (a) {
			if (mobile_nav.hasClass("active")) {
				desktop_nav.slideUp("slow", "easeOutExpo").removeClass("menu-opened");
				mobile_nav.removeClass("active");
			}
		});

		/* ==============================================
		Sub menu
		=============================================== */

		var menuSub = $(".menu-down");
		var menulist;

		$(".small-device-menu .menu-down").find(".fas:first").removeClass("fa-angle-right").addClass("fa-angle-down");

		menuSub.on("click", function () {
			if ($(".main-nav").hasClass("small-device-menu")) {
				menulist = $(this).parent("li:first");
				if (menulist.hasClass("menu-opened")) {
					menulist.find(".nav-sub:first").slideUp(function () {
						menulist.removeClass("menu-opened");
						menulist.find(".menu-down").find(".fas:first").removeClass("fa-angle-up").addClass("fa-angle-down");
					});
				} else {
					$(this).find(".fas:first").removeClass("fa-angle-down").addClass("fa-angle-up");
					menulist.addClass("menu-opened");
					menulist.find(".nav-sub:first").slideDown();
				}

				return false;
			} else {

			}

		});

		menulist = menuSub.parent("li");
		menulist.hover(function () {
			if (!($(".main-nav").hasClass("small-device-menu"))) {
				$(this).find(".nav-sub:first").stop(true, true).fadeIn("fast");
			}
		}, function () {
			if (!($(".main-nav").hasClass("small-device-menu"))) {
				$(this).find(".nav-sub:first").stop(true, true).delay(100).fadeOut("fast");
			}
		});

	}


	function init_scrolltop() {

		var offset = 450;
		var duration = 500;

		jQuery('.scroll-to-top').on("click", function (event) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
		})
	}

	function init_parallax() {
		// Parallax       

		if (($(window).width() >= 1024) && (mobileTest == false)) {
			$(".parallax-1").parallax("50%", 0.1);
			$(".parallax-2").parallax("50%", 0.2);
			$(".parallax-3").parallax("50%", 0.3);
			$(".parallax-4").parallax("50%", 0.4);
			$(".parallax-5").parallax("50%", 0.5);
			$(".parallax-6").parallax("50%", 0.6);
			$(".parallax-7").parallax("50%", 0.7);
			$(".parallax-8").parallax("50%", 0.9);
			$(".parallax-9").parallax("50%", 0.9);
			$(".parallax-10").parallax("50%", 0.5);
			$(".parallax-11").parallax("50%", 0.05);
		}

	}

	function init_productzoom() {
		if (mobileTest == false) {
			$('.product-zoom').zoom({
				url: $(this).find("img").src = $(this).find("img").attr('data-src')
			});
		} else {
			$('.product-zoom').zoom({
				url: $(this).find("img").src = $(this).find("img").attr('data-src'),
				on: 'click',
				touch: false
			});
		}
	}

	function equalizeHeight() {
		$(document).imagesLoaded(function () {
			if ($(window).width() < 768) {
				$(".equalize").equalize({
					equalize: "outerHeight",
					reset: true
				});
				$(".equalize.md-equalize-auto").children().css("height", "");
				$(".equalize.sm-equalize-auto").children().css("height", "");
				$(".equalize.xs-equalize-auto").children().css("height", "");
				return false;
			} else if ($(window).width() <= 992) {
				$(".equalize").equalize({
					equalize: "outerHeight",
					reset: true
				});
				$(".equalize.md-equalize-auto").children().css("height", "");
				$(".equalize.sm-equalize-auto").children().css("height", "");
				return false;
			} else if ($(window).width() <= 1199) {
				$(".equalize").equalize({
					equalize: "outerHeight",
					reset: true
				});
				$(".equalize.md-equalize-auto").children().css("height", "");
				return false;
			} else {
				$(".equalize").equalize({
					equalize: "outerHeight",
					reset: true
				});
			}
		});
	}

	function init_lightbox() {
		// Works Item Lightbox				
		$(".work-lightbox").magnificPopup({
			gallery: {
				enabled: true
			},
			mainClass: "mfp-fade",
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					return item.el.attr('title');
				}
			}
		});

		// gallery Item Lightbox				
		$(".gallery-lightbox").magnificPopup({
			gallery: {
				enabled: true
			},
			mainClass: "mfp-fade"
		});

		$(".lightbox").magnificPopup();

		// Initialize popup as usual
		$('.zoom-gallery').magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			gallery: {
				enabled: true
			},
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
				}
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function (openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}

		});

		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}

		});

		$('.image-popup-fit-width').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			}
		});

		$('.image-popup-no-margins').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});

		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});

		$('.popup-with-form').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#Email',
			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function () {
					if ($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#Email';
					}
				}
			}
		});

		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	}

	function init_tooltip() {
		// Position Tipso
		$('.tooltip-right').tipso({
			position: 'right',
			background: 'rgba(0,0,0,0.8)',
			titleBackground: 'tomato',
			useTitle: false,
		});
		$('.tooltip-left').tipso({
			position: 'left',
			background: 'tomato',
			useTitle: false,
		});
		$('.tooltip-bottom').tipso({
			position: 'bottom',
			background: 'rgba(0,0,0,0.8)',
			useTitle: false,
		});
		$('.tooltip-top-right').tipso({
			position: 'top-right',
			background: 'rgba(0,0,0,0.8)',
			titleBackground: 'tomato',
			titleContent: 'Some title',
			useTitle: false,
			tooltipHover: true
		});

		$('.tooltip-top-left').tipso({
			position: 'top-left',
			background: 'rgba(0,0,0,0.8)',
			titleBackground: 'tomato',
			titleContent: 'Some title',
			useTitle: false,
			tooltipHover: true
		});

		$('.tooltip-bottom-right').tipso({
			position: 'bottom-right',
			background: 'rgba(0,0,0,0.8)',
			titleBackground: 'tomato',
			titleContent: 'Some title',
			useTitle: false,
			tooltipHover: true
		});

		$('.tooltip-bottom-left').tipso({
			position: 'bottom-left',
			background: 'rgba(0,0,0,0.8)',
			titleBackground: 'tomato',
			titleContent: 'Some title',
			useTitle: false,
			tooltipHover: true
		});

	}

	function js_hight_fullscreen() {
		$(".home,.split-home").height($(window).height());
		$(".fullscreen").height($(window).height());
		$(".height-parent").each(function () {
			$(this).height($(this).parent().first().height());
		});
		// if ($(window).width() > 768) {
		// 	$(".split-home").height($(window).height());
		// } else {
		// 	$(".split-home").height($(window).height() * 2);
		// }
	}

	// Projects filtering
	var selector = 0;
	var project_grid = $("#project_grid, #isotope");

	function init_ProjectFilter() {
		var isotope_mode;
		if (project_grid.hasClass("masonry")) {
			isotope_mode = "masonry";
		} else {
			isotope_mode = "fitRows"
		}

		$(".filter").on("click", function () {
			$(".filter").removeClass("current");
			$(this).addClass("current");
			selector = $(this).attr('data-filter');
			project_grid.isotope({
				itemSelector: '.work-item',
				layoutMode: isotope_mode,
				filter: selector
			});
			return false;
		});

		if (window.location.hash) {
			$(".filter").each(function () {
				if ($(this).attr("data-filter") == "." + window.location.hash.replace("#", "")) {
					$(this).trigger('click');

					$("html, body").animate({
						scrollTop: $("#portfolio").offset().top
					});

				}
			});
		}

		if (project_grid.hasClass("projects-wrapper")) {
			project_grid.imagesLoaded(function () {
				project_grid.isotope({
					itemSelector: '.work-item',
					layoutMode: isotope_mode,
					filter: selector
				});
			});
		}
	}

	function init_masonry() {
		$(".masonry").imagesLoaded(function () {
			$(".masonry").masonry();
		});
	}

	function init_scroll_navigate() {

		$(".local-scroll").localScroll({
			target: "body",
			duration: 1500,
			offset: 0,
			easing: "easeInOutExpo"
		});

		var sections = $(".page-section");
		var menu_links = $(".scroll-nav li a");

		$(window).scroll(function () {

			sections.filter(":in-viewport:first").each(function () {
				var active_section = $(this);
				var active_link = $('.scroll-nav li a[href="#' + active_section.attr("id") + '"]');
				menu_links.removeClass("active");
				active_link.addClass("active");
			});

		});

	}

	function PlayAppSection() {
		clearTimeout(timeoutPlayPobNum);
		var pobLis = $('.app-block ul li');
		if (pobNum < pobLis.length - 1) {
			pobNum++;
			$('.app-block ul li').removeClass('pob-active');
			$('.app-block ul li').eq(pobNum).addClass('pob-active');
			$('.hide-image').removeClass('visible-image');
			$('.hide-image').eq(pobNum).addClass('visible-image');
		} else {
			pobNum = 0;
			$('.app-block ul li').removeClass('pob-active');
			$('.app-block ul li').eq(pobNum).addClass('pob-active');
			$('.hide-image').removeClass('visible-image');
			$('.hide-image').eq(pobNum).addClass('visible-image');
		}
		timeoutPlayPobNum = setTimeout(PlayAppSection, 2400);
		pobLis.on("click", function (e) {
			e.preventDefault();
			clearTimeout(timeoutPlayPobNum);
			pobNum = $(this).index();
			$('.app-block ul li').removeClass('pob-active');
			$('.app-block ul li').eq(pobNum).addClass('pob-active');
			$('.hide-image').removeClass('visible-image');
			$('.hide-image').eq(pobNum).addClass('visible-image');
		}, function () {
			pobNum = $(this).index() - 1;
			PlayAppSection();
		});
	}

	function tab_init() {
		$('.tabbed-content').each(function () {
			$(this).append('<ul class="content"></ul>');
		});

		$('.tabs li').each(function () {
			var originalTab = $(this),
				activeClass = "";
			if (originalTab.is('.tabs>li:first-child')) {
				activeClass = ' class="active"';
			}
			var tabContent = originalTab.find('.tab-content').detach().wrap('<li' + activeClass + '></li>').parent();
			originalTab.closest('.tabbed-content').find('.content').append(tabContent);
		});

		$('.tabs li').on("click", function () {
			$(this).closest('.tabs').find('li').removeClass('active');
			$(this).addClass('active');
			var liIndex = $(this).index() + 1;
			$(this).closest('.tabbed-content').find('.content>li').removeClass('active');
			$(this).closest('.tabbed-content').find('.content>li:nth-of-type(' + liIndex + ')').addClass('active');
		});
	}

	function init_wow() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 90,
			mobile: false,
			live: true
		});

		if ($("body").hasClass("content-animate")) {
			wow.init();
		}
	}

})(jQuery);