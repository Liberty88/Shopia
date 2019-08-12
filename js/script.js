let hoverItem = $('.collection-content__item');
hoverItem.on('mouseenter', function() {
    $(this).find("img").addClass('brightDown');
});
hoverItem.on('mouseleave', function() {
    $(this).find("img").removeClass('brightDown');
});