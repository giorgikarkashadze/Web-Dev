$(document).ready(function(){

    let header = document.querySelector('.header');
    let headerHeight = header.clientHeight;

window.onscroll = function(){
    if(window.pageYOffset > headerHeight){
        header.classList.add('fixed')
    }else{
        header.classList.remove('fixed')
    }
}

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed:1000,
      });
  });