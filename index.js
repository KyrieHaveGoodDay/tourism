// AOS
AOS.init();


// Slick
$('#activity-img ,#activity-winter').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);
    if (scrollPos > 630) {
        $('#number .progress-bar').each(function () {
            var thisValue = $(this).data('progress');
            // console.log(thisValue);
            $(this).css('width', thisValue + "%");
        })
    }
})

$('#moveBox').slideUp();

$('#offOn').click(function () {
    $('#moveBox').slideToggle('slow');
})

