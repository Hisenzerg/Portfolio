$(function () {
  
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active')
  });

  $('.menu__btn-close').on('click', function () {
    $('.menu').removeClass('menu--active')
  })


});