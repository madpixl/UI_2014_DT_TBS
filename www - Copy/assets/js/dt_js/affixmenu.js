$(document).ready(function(e) {
 var nav = $('#nav-secondary');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 190) {
            nav.addClass("stay-put");
        } else {
            nav.removeClass("stay-put");
        }
    });
});