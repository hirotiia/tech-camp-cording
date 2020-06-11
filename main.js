$(document).ready(function(){
    $('.slider-outer').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              centerPadding: '20%',
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              dots: true,
              centerMode: true,
              centerPadding: '20%',
              fade: false,
              variableWidth: true,
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.loop_wrap').slick({
        arrows: false,
        autoplay: true,
        /* ポイントここから～ */
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 12000,
        /* ～ここまで */
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              speed: 6000,
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.slider-carier').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
              centerPadding: '20%',
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              dots: true,
              centerMode: true,
              centerPadding: '20%',
              fade: false,
              variableWidth: true,
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      
});
