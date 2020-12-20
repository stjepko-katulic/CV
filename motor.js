$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});


$(document).ready(function () {
    $('[data-toggle="popover"]').popover({ html: true });
});


var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".dropdown");


menuBtn.onclick = function() {
    menu.classList.toggle("menu-unhide");
}


var closeX = document.querySelector(".X");

closeX.onclick = function() {
    menu.classList.toggle("menu-unhide");
}

