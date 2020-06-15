
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


//arrow down
var prodectMeun = $(".show-prodect").offset().top;
$(".arrow-down").click(function () {
    
    $("html , body").animate({scrollTop: prodectMeun} , 1000)
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


    // add to card


        $(".store-item-icon").click(function () {


            if ($(this).target.parentElement.classList.contains('store-item-icon')) {
    
                let fullPath = $(this).target.parentElement.previousElementSibling.src;

                let pos = fullPath.indexOf('img') + 3; //use the 3 to get rid of the 'img' string

                let partPath = fullPath.slice(pos);

                const item = {};

                item.img = `img-cart${partPath}`;

                let name = $(this).target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

                item.name = name;

                let price = $(this).target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();

                item.price = finalPrice;

                const cartItem = document.createElement('div');

                cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3');

                cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;

                //select cart

                const cart = $(".card-layout");
                // const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('item added to the cart');

                showTotals();

            }
        });

        // show totals
        function showTotals() {
    
            const total = [];
            const items = $('.cart-item-price');
            items.forEach(function (item) {
                total.push(parseFloat(item.textContent));
            })
    
            const totalMoney = total.reduce(function (total, item) {
                total += item;
                return total;
            }, 0);

            const finalMoney = totalMoney.toFixed(2);
    
            document.getElementById('cart-total').textContent = finalMoney;
            document.querySelector('.item-total').textContent = finalMoney;
            document.getElementById('item-count').textContent = total.length;
        }
       
          
   
 
$(".close-tap").click(function () {
  $(".quick-view").fadeOut(500);
    })
  
    

$(".prodect-head img").click(function () {
    $(".quick-view").fadeIn(500);
    let backeground = $(this).attr("src");
    $(".img-corner").css("backgroundImage" , "url("+backeground+")")
})

    
    


    


