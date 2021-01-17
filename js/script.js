let time = 2;
let cc = 1;
$(window).scroll(function () {
    $('#counter').each(function () {
        let cPos = $(this).offset().top;
        let topWindow = $(window).scrollTop();
        if (cPos < topWindow + 400) {
            if (cc < 2) {
                $('.number').addClass('visibility');
                $('p').each(function () {
                    let i = 1;
                    let num = $(this).data('num');
                    let step = 1000 * time / num;
                    let that = $(this);
                    let int = setInterval(function () {
                        if (i <= num) {
                            that.html(i);
                        } else {
                            cc= cc + 2;
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                });
            }
        };
    });
});


new Swiper('.text-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    simulateTouch: false,

    hashNavigation: {
        watchState: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
    autoHeight: true,

    loop: true,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});


$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop != 0) {
            $('#topButton').fadeIn();
        } else {
            $('#topButton').fadeOut();
        }
    });
    $('#topButton').click(function() {
        $('body, html').animate( {
            scrollTop: 0
        }, 700);
    });
});


