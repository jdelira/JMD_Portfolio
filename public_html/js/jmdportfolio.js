(function($) {
	
	
	//-----------------------------
	//-------Content 2 actions-----
	//-----------------------------
	//vertical swiper handler instance
	var swiperV = new Swiper('.swiper-container-v', {
		initialSlide: 0,
		noSwiping: true,
        noSwipingClass: 'swiper-slide',
        direction: 'vertical'
		
    });
	
	
	 //horizontal swiper handler instance
	 var swiperH = new Swiper('.swiper-container-h', {
		effect: 'coverflow',
        pagination: '.swiper-pagination-h',
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		paginationClickable: true,
        centeredSlides: true,
		autoheight: true,
		preloadImages: false,
		lazyLoading: true,
        slidesPerView: 'auto',
		watchSlidesVisibility: true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1
        },
		paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
	
	
	
	
	
	// pill-swiper linkage control
	$(".swiper-link").on("click", function(){
		
		if(this.href.indexOf('0') != -1)
		{
			swiperV.slideTo(0,600,false);
		}
		else if(this.href.indexOf('1') != -1)
		{
			swiperV.slideTo(1,600,false);
		}
		else if(this.href.indexOf('2') != -1)
		{
			swiperV.slideTo(2,600,false);
		}
	});
	//-------End Content 2 actions---------
	
	
    
	
	
	
	
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: ($($anchor.attr('href')).offset().top - 100)}, 1250, 'easeInOutExpo');
		
		event.preventDefault();
    });
	

	$(window).scroll( function() { 
		if($(document).scrollTop() > 150){
			$(".navbar").toggleClass("navbar-inverse", true);
		}
		else{
			$(".navbar").toggleClass("navbar-inverse", false);
		}
	});
	
	
	
	
	
    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict