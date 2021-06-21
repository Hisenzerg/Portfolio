$(function () {
  

  $('.menu__btn, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active')
  });

  $('.menu__btn-close').on('click', function () {
    $('.menu').removeClass('menu--active')
  })

});