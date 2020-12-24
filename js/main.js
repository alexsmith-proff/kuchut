$( document ).ready(function() {
  
	$('.history-detail__carousel').owlCarousel({
        items:5,
        loop:false,
        center:true,
        margin:60,
        //URLhashListener:true,
        //autoplayHoverPause:true,
        startPosition: 2,
        //autoWidth: true,
        //stagePadding: 400,
        nav: true,
        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
        dots: false,
    });

    $('.jewelry__carousel').owlCarousel({
        items:6,
        loop:false,
        center:true,
        margin:5,
        //URLhashListener:true,
        //autoplayHoverPause:true,
        startPosition: 2,
        //autoWidth: true,
        //stagePadding: 400,
        nav: true,
        navText: ["<img src='img/prev2.png'>", "<img src='img/next2.png'>"],
        dots: false,
    });



});