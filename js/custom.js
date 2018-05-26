/*=== section Scroll ===*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.section-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 69
        }, 700);
        event.preventDefault();
    });
});


/*=== Navbar script ===*/
$(window).scroll(function(){

	if($(window).scrollTop() > 30) {
		  $('.navbar').addClass('navbar-bg').fadeIn(300);
			//$('header > div > .navbar > div').removeClass('container');
            //$('header > div ').addClass('container');
            
	  } 
		else{
			$('.navbar').removeClass('navbar-bg').fadeIn(300);
			//$('header > div > .navbar > div').removeClass('container');
            //$('header > div > .navbar > div').addClass('container');
		}
		
	});

if($(window).scrollTop() > 30){
	$('.navbar').addClass('navbar-bg').fadeIn(300);
}


/*=== hover dropdown ===*/
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});



/*=== bootstrap carousel ===*/
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#my-carousel-1'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	}); 
    
})(jQuery);    
    
/*=== clients ====*/
$(".clients").owlCarousel({ 
    autoplay: true,
    loop: true,
    nav: true,
    margin: 20,
    navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:3,
            nav: true
        },
        1000:{
            items:5,
            loop:true,
            nav: true,
        }
    }    
});
	
    
/*=== clients ====*/
$(".pro-slide, .pro-slide2").owlCarousel({ 
    autoplay: true,
    loop: true,
    nav: true,
    margin: 30,
    navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:3,
            nav: true
        },
        1000:{
            items:4,
            loop:true,
            nav: true,
        }
    }    
});
