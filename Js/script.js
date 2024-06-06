
$(document).ready(function () {
    // Show or hide the scroll-to-top button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    // Smooth scroll to top when button is clicked
    $('#scroll-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500); // Adjust scrolling speed here
        return false;
    });
});