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








// //regular expressions and validate
  

// const emailRag = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordRag = /^[A-Za-z]\w{7,14}$/;



// //for email

// let emailValue = $("#exampleInputEmail1");

// emailValue.keyup(function () {
//   if (nameRag.test(emailRag.value) == false)
//   {
//     emailValue.attr("class", "is-invalid");
//     emailValue.removeClass("is-valid");
//   }
//   else
//   {
//     emailValue.attr("class", "is-valid");
//     emailValue.removeClass("is-invalid")
//     }
// })



// //for password

// let passwordValue = $("#exampleInputPassword");

// passwordValue.keyup(function () {
//   if (passwordRag.test(passwordValue.value) == false)
//   {
//     passwordValue.attr("class", "is-invalid");
//     passwordValue.removeClass("is-valid");
//   }
//   else
//   {
//     passwordValue.attr("class", "is-valid");
//     passwordValue.removeClass("is-invalid")
//     }
// })