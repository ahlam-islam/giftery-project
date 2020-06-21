
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


// img slider


//1-close

$(".main-img .close-slider").click(function () {
    $(".img-slider").fadeOut(500);
})

//2-open

$(".img-group img").click(function () {
    let srcImg = $(this).attr("src");
    $(".main-img img").attr("src", srcImg);
    $(".img-slider").fadeIn(500);

});


    $(".img-corner img").click(function () {
        let srcImg = $(this).attr("src");
        $(".main-img img").attr("src", srcImg);
        $(".img-slider").fadeIn(500);
    });

//3-left slider

    $(".left-img img").click(function () {
        let srcImg = $(this).attr("src");
        $(".main-img img").attr("src", srcImg);
    });

//4-main slider

var arr = ["img/singel-prodect/2.webp", "img/singel-prodect/3.webp", "img/singel-prodect/4.webp", "img/singel-prodect/5.webp"];

//4.1- arrow right
$(".arrow-right").click(function () {
        
    let mainImgSrc = $(".main-img img").attr("src");
    let imgIndex = arr.indexOf(mainImgSrc) + 1; 
    $(".main-img img").attr("src", arr[imgIndex]);

    if (imgIndex > 3)
    {
        $(".main-img img").attr("src" , "img/singel-prodect/1.webp");
        }

});
    
//4.1- arrow left
$(".arrow-left").click(function () {
        
    let mainImgSrc = $(".main-img img").attr("src");
    let imgIndex = arr.indexOf(mainImgSrc) -1; 
    $(".main-img img").attr("src", arr[imgIndex]);

    if (imgIndex < 0)
    {
        $(".main-img img").attr("src" , "img/singel-prodect/5.webp");
        }

});



//slider

$('.multiple-items').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    accessibility: false,
    autoplay: true,
    focusOnSelect: true,
    focusOnChange: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});
  

//add to star

$(".add-star").click(function () {
    $(this).addClass("fas fa-star");
})
