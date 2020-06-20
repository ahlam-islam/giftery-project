
// NavBar Toggeler 

let flag = true;
$('.navbar-toggler').click(function () {

    if (flag == true) {
        $('.navbar-toggler span').addClass('fas fa-times times');
        $('.navbar-toggler span').removeClass('navbar-toggler-icon');
        flag = false;
    }
    else {
        $('.navbar-toggler span').addClass('navbar-toggler-icon');
        $('.navbar-toggler span').removeClass('fas fa-times times');
        flag = true;
    }

});


//arrow down
var prodectMeun = $(".show-prodect").offset().top;
$(".arrow-down").click(function () {

    $("html , body").animate({ scrollTop: prodectMeun }, 1000)
})


//arrow up

$(window).scroll(function (){
    let hight = $(window).scrollTop();
    if (hight > prodectMeun)
    {
      
        $(".arrow-up").fadeIn(500);
    }
    else
    {
        $(".arrow-up").fadeOut(500)
        }
  
})


$(".arrow-up").click(function () {

    $("body , html").animate({scrollTop: "0"} , 1000)
})



//filter img

$(".project-items").isotope({
    itemSelector: ".items",
    layoutMode: "fitRows",
});
$(".prodect-menu ul li").click(function () {
    $(".prodect-menu ul li").removeClass("active");
    $(this).addClass("active");


    let selector = $(this).attr("data-filter");
    $(".project-items").isotope({
        filter: selector
    });
    return false;

})

//show card

$(".close").click(function () {
    $(".card-layout").fadeOut(1000)
})

$(".shopping-icon").click(function () {
    $(".card-layout").fadeIn(1000);
})

$(".close-tap").click(function () {
    $(".quick-view").fadeOut(500);
})



$(".prodect-head img").click(function () {
    $(".quick-view").fadeIn(500);
    let backeground = $(this).attr("src");
    $(".img-corner").css("backgroundImage", "url(" + backeground + ")")
})



// add to card
