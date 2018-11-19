$('document').ready(function () {
    
    $('.side-navbar .dropright').hover(function () {

        $(this).find('.dropdown-menu').stop().slideDown(350)

    },function () {

        $(this).find('.dropdown-menu').stop().slideUp(50)

    })

});