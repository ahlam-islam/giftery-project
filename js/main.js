
// NavBar Toggeler 

let flag = true ; 
$('.navbar-toggler').click(function () { 
  
  if (flag == true)
  {
    $('.navbar-toggler span').addClass('fas fa-times times');
    $('.navbar-toggler span').removeClass('navbar-toggler-icon');
    flag = false ; 
  }
  else
  {
    $('.navbar-toggler span').addClass('navbar-toggler-icon');
    $('.navbar-toggler span').removeClass('fas fa-times times');
    flag = true ; 
  }

});


//header fire function

$('.skitter-large').skitter({
    thumbs: false,
    numbers_align: 'right',
    fullscreen: true,
    dots: false
   
});
  

//section tow slider
$(".img-group").click(function () {
    var imgSrc = $(this).attr("src");
    $(".main-img").attr("src", imgSrc );
})


//change navbar color



var clothesDistanc = $(".clothes").offset().top;
$(window).scroll(function () {
    let windowDistanc = $(window).scrollTop();
    if (windowDistanc > clothesDistanc)
    {
        $(".my-nav").css("background", "linear-gradient(90deg, rgb(213, 51, 42 , .5) 0%, rgb(48, 57, 96 , .5) 100% )")
        $(".arrow-up").fadeIn(500)
    }
    else
    {
        $(".my-nav").css("background", "transparent")
        $(".arrow-up").fadeOut(500)
        }
})

$(".arrow-up").click(function () {
    $("html , body").animate({scrollTop: '0'} , 1000)
})

/* ####################################### video ######################################### */

$('.close-video').click(function () { 

  $('#video-layout').addClass('dis-none');
  $('#video-layout').removeClass('dis-flex');
  $('body').removeClass('overFlow');
});



$('#open-layout').click(function () { 
  
  $('#video-layout').addClass('dis-flex');
  $('body').addClass('overFlow');
});


/* ####################################### Accessories ######################################### */


$('.owl-carousel').owlCarousel({
  loop: true,
  
  margin: 20,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  autoplay: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel();
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});
/*  ##########################################  Loading ################################### */

$(document).ready(function () {
  $('#loading').fadeOut(5000, function () {

    $('body').removeClass('overFlow');
  });
});