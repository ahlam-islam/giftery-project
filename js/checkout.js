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



/*################################################ My FORM ########################################### */

/* Show the password function*/

function myFunction() {
  var x = document.getElementById("userPass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}




/* ########################################### Body Layout ##################################################### */
