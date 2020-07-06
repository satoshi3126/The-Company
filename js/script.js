// top page戻るボタン
$(document).ready(function() {
    var pagetop = $('.totop');
    $(window).scroll(function() {
        if($(this).scrollTop() > 80) {
            pagetop.fadeIn();
        }else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
});

// ページ内移動(スムーススクロール)
$(function(){
    $('a[href^="#"]').click(function(){
      var adjust = -95;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

   // クリック（メニュー）
 jQuery('.header__nav ul li a').click(function() {
    jQuery('.header__nav ul li a').removeClass( 'is-active' );
    jQuery(this).addClass( 'is-active' );
    return false;
});

// アコーディオン
jQuery('.accordion__head').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass('is-open');
});

// アコーディオンY
jQuery('.accordion-y__head').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion-y__icon').toggleClass('is-open');
});


// モダール（開く）
jQuery('.js-modal-open').click(function(e) {
    e.preventDefault();
    let target = jQuery(this).data("target");
    jQuery('.' + target).addClass('is-show');

    return false;
});

// モダール（閉じる）
jQuery('.js-modal-close').click(function(e) {
    e.preventDefault();
    let target = jQuery(this).data("target");
    jQuery('.' + target).removeClass('is-show');

    return false;
});

// swiper
var mySwiper = new Swiper ('.swiper-container', {
	effect: "slide",
	loop: true,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev'
}) 