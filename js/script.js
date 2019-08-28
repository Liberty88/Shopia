let hoverItem = $('.collection-content__item');
hoverItem.on('mouseenter', function() {
    $(this).find("img").addClass('brightDown');
    $(this).find("button").addClass('color-change');
});
hoverItem.on('mouseleave', function() {
    $(this).find("img").removeClass('brightDown');
    $(this).find("button").removeClass('color-change');

});

$('.banner-section').slick({
    fade: true,
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.lower-header__hamburger-button').on('click', function () {
    $('.page-nav').toggleClass('open');
    $('.page-nav__menu').toggleClass('open');
    $('html').toggleClass('open');
    $(this).toggleClass('open');
});

