 let nav_offset_top = $('header').height() + 50;

    function navbarFixed() {
        if ($('header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('header .navbar').addClass('navbar_fixed');
                } else {
                    $('header .navbar').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});