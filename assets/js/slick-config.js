$('.comment').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  nextArrow: `<button class=""><img src="assets/img/arrow.svg" alt="arrow"></button>`,
  prevArrow: `<button class="btn__left"><img src="assets/img/arrow.svg" alt="arrow"></button>`,
  responsive: [
    {
      breakpoint: 768.98,
      settings: {
        arrows: false
      }
    }
  ]

});
