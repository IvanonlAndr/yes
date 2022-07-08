$(function () {
    $('.top__slider').slick({
        //   setting-name: setting-value
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                dots: false
              }
            },
            {
              breakpoint: 860,
              settings: {
                dots: false
              }
            },
        ]
    });
    $('.reviews__slider').slick({
        //   setting-name: setting-value
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                dots: false,
                slidesToShow: 3,
              }
            },
        ]
    });
    $('.menu-btn').on('click', function(){
        $('.menu_list').toggleClass('menu_list-active');
    });
});
