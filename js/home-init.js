(function ($) {
	"use strict";
	$(document).ready(function () {

		/* Initialize expertise Swiper */
		var swiper = new Swiper('.expertise-swiper', {
			navigation: {
				nextEl: '.expertise-right',
				prevEl: '.expertise-left',
			},
			pagination: false,
			parallax: true,
			spaceBetween: 50,
			speed: 600,
		});

		/* Text fade slider */
		var swiper = new Swiper('.text-fade-slider,.home-fullwidth-swiper,.home-circle-swiper', {
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			speed: 600,
			autoplay: {
				delay: 2000,
			},
			parallax: true,
			onlyExternal: true,
			followFinger: false,
			simulateTouch: false,
			touchRatio: 0,
			autoHeight: true
		});

		/* Initialize Service Swiper slider */
		var swiper = new Swiper('.service-swiper', {
			navigation: {
				nextEl: '.service-right',
				prevEl: '.service-left',
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			parallax: true,
			spaceBetween: 50,
			speed: 600,
			onlyExternal: true,
			followFinger: false,
			simulateTouch: false,
			touchRatio: 0
		});
		/*End Initialize Service Swiper slider */

		// Split slider
		var swiper = new Swiper('.split-slider', {
			navigation: {
				nextEl: '.split-slide-right',
				prevEl: '.split-slide-left',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
			parallax: true,
			spaceBetween: 50,
			speed: 600,
			onlyExternal: true,
			followFinger: false,
			simulateTouch: false,
			touchRatio: 0
		});

		/* Initialize Swiper */
		var swiper = new Swiper('.work-swiper', {
			navigation: {
				nextEl: '.work-right',
				prevEl: '.work-left',
			},
			speed: 600,
			slidesPerView: 3,
			spaceBetween: 10,
			breakpoints: {
				1024: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 1
				},
				320: {
					slidesPerView: 1
				}
			}
		});

		/* testimonial Swiper */
		var testiswiper = new Swiper('.testimonial-swiper', {
			navigation: {
				nextEl: '.testimonial-right',
				prevEl: '.testimonial-left',
			},
			pagination: {
				el: '.swiper-index',
				type: 'fraction',
			},
			parallax: true,
			spaceBetween: 50,
			speed: 600,
			grabCursor: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
		});

		/* Initialize features Swiper */
		var myswiper = new Swiper('.features-swiper', {
			pagination: {
				el: '.swiper-pagination-features',
				type: 'fraction',
			},
			speed: 600,
			autoplay: {
				delay: 2500,
			},
			grabCursor: true,
			centeredSlides: true,
			paginationClickable: true,
			spaceBetween: 10,
			slidesPerView: 3,
			breakpoints: {
				1024: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 1
				},
				320: {
					slidesPerView: 1
				}
			}
		});

		/* Initialize clients Swiper */
		var swiperClients = new Swiper('.client-swiper', {
			mode: 'horizontal',
			slidesPerView: 6,
			slidesPerViewFit: true,
			loop: true,
			autoplay: {
				delay: 1200,
			},
			disableOnInteraction: false,
			speed: 1200,
			grabCursor: true,
			autoplayStopOnLast: false,
			sliderMove: swiperClientsTouched,
			breakpoints: {
				1024: {
					slidesPerView: 5
				},
				768: {
					slidesPerView: 4
				},
				640: {
					slidesPerView: 3
				},
				320: {
					slidesPerView: 2
				}
			}
		});

		function swiperClientsTouched() {
			swiperClients.autoplay.stop();
			swiperClients.params.autoplay = 4000;
			swiperClients.autoplay.start();
		}

		/* Swiper content slider */
		var myswiper = new Swiper('.swiper-content-slider', {
			navigation: {
				nextEl: '.workfull-right',
				prevEl: '.workfull-left',
			},
			pagination: {
				el: '.swiper-content-slider-index',
				type: 'fraction',
			},
			parallax: true,
			spaceBetween: 50,
			speed: 600,
			autoplayDisableOnInteraction: false,
			onlyExternal: true,
			followFinger: false,
			simulateTouch: false,
			touchRatio: 0
		});

		/* Initialize gallery Swiper */
		var swiper = new Swiper('.gallery-swiper', {
			slidesPerView: 4,
			spaceBetween: 0,
			freeMode: true,
			grabCursor: true,
			breakpoints: {
				1024: {
					slidesPerView: 4
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 2
				},
				320: {
					slidesPerView: 1
				}
			}
		});

		/* Initialize project gallery Swiper */
		var swiper = new Swiper('.project-gallery-swiper', {
			grabCursor: true,
			navigation: {
				nextEl: '.project-gallery-right',
				prevEl: '.project-gallery-left'
			}
		});

		/* Initialize project promo Swiper */
		var swiper = new Swiper('.project-promo-swiper', {
			grabCursor: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			spaceBetween: 0,
			navigation: {
				nextEl: '.project-promo-right',
				prevEl: '.project-promo-left'
			},
		});

		/* Initialize shop product Swiper and blog gallery swiper */
		var swiper = new Swiper('.product-gallery-swiper,.blog-gallery-swiper', {
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
			paginationClickable: true,
			grabCursor: true,
			spaceBetween: 30,
			loop: true,
			autoplay: 4000,
		});

		/* Initialize Related Post Swiper */
		var itemno = $('.related-post-swiper').attr('data-item');
		var swiper = new Swiper('.related-post-swiper', {
			paginationClickable: true,
			navigation: {
				nextEl: '.rpost-right',
				prevEl: '.rpost-left',
			},
			speed: 600,
			slidesPerView: itemno,
			spaceBetween: 30,
			breakpoints: {
				1024: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 1
				},
				320: {
					slidesPerView: 1
				}
			}

		});

		/* Home Fullscreen Slider*/
		var swiper = new Swiper('.home-fullscreen-swiper', {
			loop: true,
			autoplay: {
				delay: 1600,
			},
			disableOnInteraction: false,
			speed: 1200,
			spaceBetween: 5,
			parallax: true,
			centeredSlides: true,
			grabCursor: true,
			paginationClickable: true,
		});

		/* Home Fullscreen Slider Free mode*/
		var swiper = new Swiper('.home-fullscreen-swiper-freeMode', {
			pagination: {
				el: '.home-fullscreen-swiper-pagination',
				type: 'progressbar',
			},
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			disableOnInteraction: false,
			speed: 5000,
			spaceBetween: 0,
			freeMode: true,
			loop: true,
			grabCursor: true,
			paginationClickable: true,
		});

		/* Home Fullscreen content sider */
		var swiper = new Swiper('.home-content-swiper', {
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			spaceBetween: 0,
			loop: true,
			speed: 1200,
			grabCursor: true,
		});

		/* Home Fullscreen content sider Vertical */
		if ($('.home-content-swiper-vertical').length != 0) {
			var swipervertical = new Swiper('.home-content-swiper-vertical', {
				direction: 'vertical',
				autoplay: {
					delay: 1800,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.home-content-swiper-vertical-pagination',
					clickable: true,
				},
				spaceBetween: 0,
				loop: true,
				speed: 800,

			});
			var startScroll, touchStart, touchCurrent;
			swipervertical.slides.on('touchstart', function (e) {
				startScroll = this.scrollTop;
				touchStart = e.targetTouches[0].pageY;
			}, true);
			swipervertical.slides.on('touchmove', function (e) {
				touchCurrent = e.targetTouches[0].pageY;
				var touchesDiff = touchCurrent - touchStart;
				var slide = this;
				var onlyScrolling =
					(slide.scrollHeight > slide.offsetHeight) && //allow only when slide is scrollable
					(
						(touchesDiff < 0 && startScroll === 0) || //start from top edge to scroll bottom
						(touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) || //start from bottom edge to scroll top
						(startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight)) //start from the middle
					);
				if (onlyScrolling) {
					e.stopPropagation();
				}
			}, true);
		}
		/* Home Fullscreen content sider restaurant */
		var swiper = new Swiper('.home-content-swiper-restaurant', {
			spaceBetween: 0,
			grabCursor: true,
			autoplay: 3000,
			speed: 1500,
			loop: true,
			autoplayDisableOnInteraction: false,
		});

		/* Home Fullscreen sider construction */
		var swiper = new Swiper('.home-construction-swiper', {
			spaceBetween: 0,
			grabCursor: true,
			autoplay: {
				delay: 2500,
			},
			speed: 1500,
			loop: true,
			autoplayDisableOnInteraction: false,
		});

		/* Home Architecture */
		var swiper = new Swiper('.home-swiper-architecture', {
			navigation: {
				nextEl: '.archi-right',
				prevEl: '.archi-left',
			},
			pagination: {
				el: '.home-swiper-architecture-pagination',
				type: 'progressbar',
			},
			spaceBetween: 0,
			parallax: true,
			centeredSlides: true,
			grabCursor: true,
			paginationClickable: true,
		});

		/* Home Fullscreen Slider*/
		var swiper = new Swiper('.home-fullscreen-furniture', {
			navigation: {
				nextEl: '.furni-right',
				prevEl: '.furni-left',
			},
			spaceBetween: 20,
			parallax: true,
			centeredSlides: true,
			grabCursor: true,
			pagination: '.home-fullscreen-swiper-pagination',
			paginationType: 'progress',
			paginationClickable: true,
		});

		/* Home Wedding - story */
		var swiper = new Swiper('.story-swiper', {
			navigation: {
				nextEl: '.work-right',
				prevEl: '.work-left',
			},
			speed: 600,
			//height: auto,
			slidesPerView: 4,
			slidesPerGroup: 2,
			spaceBetween: 10,
			breakpoints: {
				1200: {
					slidesPerView: 2,
					spaceBetween: 60,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 60,
				},
				768: {
					slidesPerView: 2
				},
				640: {
					slidesPerView: 2
				},
				320: {
					slidesPerView: 2
				}
			}
		});

		/* Initialize app Swiper */
		var $appslider_nav = $('.app-swiper'),
			spandata = '';
		$appslider_nav.find('.swiper-slide').each(function () {
			var $div = $(this);
			var spanTxt = $div.attr("data-src");
			spandata += spanTxt + ",";
		});
		spandata = spandata.replace(/,\s*$/, "");
		var nav_array = spandata.split(',');

		var swiper = new Swiper('.app-swiper', {
			navigation: {
				nextEl: '.work-right',
				prevEl: '.work-left',
			},
			pagination: {
				el: '.swiper-app-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"><i class="fas fa-mobile-alt"></i>' + (nav_array[index]) + '</span>';
				},
			},
			slidesPerView: 4,
			spaceBetween: 0,
			slideToClickedSlide: true,
			centeredSlides: true,
		});


		/* Initialize testimonial-2 Swiper */
		var tswiper = new Swiper('.app-testimonial-swiper', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			freeMode: true,
			grabCursor: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 1
				}
			}
		});

	});
})(jQuery);