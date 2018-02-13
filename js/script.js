$(function(){

    //Scroll effects
    // var links = $('.js-menu-list .js-menu-link');
    //
    // links.on('click', function(e){
    //     e.preventDefault();
    //
    //     var selector = $(this).attr('href');
    //     var h = $(selector);
    //
    //     $('html, body').animate({
    //       scrollTop: h.offset().top
    //     }, 500);
    // });

	//Humburger menu
  	var menuBtn = $('.js-menu-bnt');
  	var menuBtnIcon = $('.js-menu-btn-icon');
  	var menuList = $('.js-menu-list');
  	var menu = $('.js-menu');

	menuBtn.on('click', function(){
		menuList.toggleClass('menu_show');
	    menuBtnIcon.toggleClass('menu-bnt__icon_show');
	    menu.toggleClass('header__items_bg');
	});

	//Accordion
	$('.js-service-about').eq(0).show();
	$('.js-service-icon').eq(0).addClass('icon-up-open-big');

    $('.js-service').on('click', function(){
        var aboutThisService = $(this).next();

        $('.js-service-about:visible').not(aboutThisService).slideUp(500);
        aboutThisService.slideDown(500);

        $('.js-service-icon').removeClass('icon-up-open-big');
        $(this).find('.js-service-icon').addClass('icon-up-open-big');
    });

    //Back to top button
    // var backToTopBtn = $('.js-back-top');
    //
 	// backToTopBtn.on('click', function(e){
	 //    $('html, body').animate({
	 //      	scrollTop: 0}, 500);
	 //      	e.preventDefault();
  	// });

  	$(window).on('scroll', function(){
	    var scrollHeight = $(this).height();
	    var scrollTop = $(this).scrollTop();
        var counterTop = $('#about').offset().top;

	    if(scrollTop > 325){
	      	if(!backToTopBtn.is(':visible')){
	        	backToTopBtn.show();
	      	}
	    }else{
	      	backToTopBtn.hide();
	    }

        if(scrollTop > counterTop){
            counter();
        }
  	});

    //Slider for the main banner
    // var mainBanner = $('.header');
    // var mainBannerImgs = ["mb-img1.jpeg", "mb-img2.jpeg", "mb-img3.jpeg", "mb-img0.jpeg"];
    // var mainBannerRunnerLines = $('.js-runner-line');
    // var index = 0;
    // var j = 0;
    //
    // mainBannerRunnerLines.eq(j).animate({
    //     width: "100%",
    // }, 5000, runnerLines);
    //
    // var runnerLines = setInterval(function() {
    //     mainBannerRunnerLines.css("width", "0");
    //     mainBannerRunnerLines.eq(j+1).animate({
    //         width: "100%",
    //     }, 4000);
    //     j++;
    //
    //     if (j == mainBannerRunnerLines.length - 1) {
    //         clearInterval(runnerLines);
    //         j = 0;
    //         setInterval(insideRL, 5000);
    //     }
    // }, 5000);
    //
    // function insideRL(){
    //     mainBannerRunnerLines.css("width", "0");
    //     mainBannerRunnerLines.eq(j).animate({
    //         width: "100%",
    //     }, 4000);
    //     j++;
    //     if( j >= mainBannerRunnerLines.length){
    //         j = 0;
    //     }
    // };
    //
    // function newImage(){
    //     mainBanner.css('background-image', 'url("img/'+mainBannerImgs[index]+'")');
    //     index++;
    //     if(index == mainBannerImgs.length){
    //         index = 0;
    //     }
    // }
    // setInterval(newImage, 5000);
    //

    //Counter
    function counter(){
        $('.amount').each(function () {
            var $this = $(this);
                countTo = $this.attr('data-count');

            $this.prop('Counter',0).animate({
                Counter: $this.text(),
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                     $this.text(Math.ceil(now));
                },
                complete: function(){
                    $this.text(this.countNum);
                }
            });
        });
    }

    //Sliders
    var slider1 = new slider({
        slides: '.js-slides',
        btnPrev: '.js-prev-btn',
        btnNext: '.js-next-btn',
        rate: 3000
    });

    var slider2 = new slider({
        slides: '.js-reviews-slides',
        btnPrev: '.js-reviews-btn-prev',
        btnNext: '.js-reviews-btn-next',
        rate: 3000
    });

    function slider(options){
        var slideCurrent = 1;
        var allSlides = $(options.slides);
        var slideAmount = $(options.slides).children().length;
        var btnPrev = $(options.btnPrev);
        var btnNext = $(options.btnNext);
        var slideInterval = options.rate;
        var switchInterval = setInterval(nextSlide, slideInterval);

        btnNext.click(function() {
            nextSlide();
        });

        btnPrev.click(function() {
            prevSlide();
        });

        btnNext.hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(nextSlide, slideInterval);
        });

        btnPrev.hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(prevSlide, slideInterval);
        });

        function nextSlide() {
            translateWidth = -$('.container').width() * (slideCurrent);
            allSlides.css({
                'transform': 'translate(' + translateWidth  + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideCurrent++;

            if ( slideCurrent <= 0 || slideCurrent > slideAmount) {
                allSlides.css('transform', 'translate(0, 0)');
                slideCurrent = 1;
            }
        }

        function prevSlide() {
            translateWidth = -$('.container').width() * (slideAmount - slideCurrent);
            allSlides.css({
                'transform': 'translate(' + translateWidth  + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideCurrent++;

            if ( slideCurrent <= 0 || slideCurrent > slideAmount) {
                allSlides.css('transform', 'translate(0, 0)');
                slideCurrent = 1;
            }
        }
    }

    //google map
    function initMap() {
        var centerLatLng = new google.maps.LatLng(52.234288, 21.006228);

        var mapOptions = {
            center: centerLatLng,
            zoom: 10
        };

        var map = new google.maps.Map(document.getElementById("contact"), mapOptions);
    }

    $(".js-map-btn").click(function(){
        initMap();
        $(".map").css("background", "0");
    });



});
