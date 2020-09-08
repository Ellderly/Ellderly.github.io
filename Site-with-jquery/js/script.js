$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1230,
            settings: {
                slidesToShow: 2
            }
        }]
    });


    $('.slider-item').on('click', function (ever) {
        $('.slider').slick('slickNext');
    })

});