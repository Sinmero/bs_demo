$('document').ready(function () {


    $('.side-navbar .dropright').hover(function () {

        $(this).find('.dropdown-menu').stop().slideDown(350)

    },function () {

        $(this).find('.dropdown-menu').stop().slideUp(50)

    });

    $('.more-categories').click(function () {

        $('.show-more').addClass('d-block').removeClass('d-none');

        $('.more-categories').css('display', 'none')

    });

    $('.navbar .input-group .btn').hover(function () {

        $('.navbar .input-group .form-control').focus().stop()
            .css('backgroundColor', 'rgba(255,255,255,1.0)')
            .css('opacity', '1.0')
            .animate({width: '1%'}, 200);

    });

    $('.navbar .input-group .form-control').focusout(function () {
        
        $('.navbar .input-group .form-control').stop()
            .css('backgroundColor', 'rgba(255,255,255,1.0)')
            .css('opacity', '0.0')
            .animate({width: '0'}, 200)

    })

});