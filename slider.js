$(document).ready(function () {
  $(".work-carousel").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "360px",
    initialSlide: 2,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $(".slider-arrow-prev"),
    nextArrow: $(".slider-arrow-next"),
    responsive: [
      // {
      //   breakpoint: 1400,
      //   settings: {
      //     centerMode: true,
      //     slidesToShow: 1,
      //     variableWidth: true,
      //   },
      // },

      {
        breakpoint: 768,
        settings: {
          centerPadding: "44px",
          variableWidth: false,
        },
      },
      // {
      //   breakpoint: 376,
      //   settings: {
      //     centerMode: true,
      //     centerPadding: "44px",
      //     slidesToShow: 1,
      //     variableWidth: false,
      //   },
      // },
    ],
  });
});
