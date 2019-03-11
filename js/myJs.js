/*

*/



$(document).ready(function(){


//  slider controls..

$('.bxslider').bxSlider({
				auto: true,
				autoControls:true,
				pager:false,
				captions: false,
				mode:'fade',
				// useCSS: true,
				// easing: 'easeOutElastic',
				// pause: 3000,
				speed: 1000
				});
				

// Dropdown menu js
				
				
	$('.main_menu ul li').click(function(){
		$(this).find('ul li').stop().slideToggle(500);
	});
    
    
// Mobile Menu click functions......
    

    $(".mobile_menu").click(function(){
        $(".menuArea").slideToggle();
    });
    

// ========== Lazy Load Image function ==============
  
  $("img.lazy").show().lazyload();
				
	$("img.lazy").lazyload({
		effect : "fadeIn",
		// threshold : 200, // it's means image will be ready before 200px 
		//event : "click",
	}); 
	

// ============== End Lagy Load ==============


    
    
    
    
});