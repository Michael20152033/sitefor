$(".header__burger").click(function() {

    $('.mobmen__back').addClass('opacity');
    $('.mobmen__back').addClass('visible');
    $('.mobmen__block').addClass('active');

});
$(".mobmen__back").click(function() {



    $('.mobmen__block').removeClass('active');

});



$(".mobmen__back").click(function() {



    function howewg() {
        $('.mobmen__back').removeClass('opacity');
    }

    setTimeout(howewg, 200);

    function howew() {
        $('.mobmen__back').removeClass('visible');
    }

    setTimeout(howew, 300);



});

$('.slider__wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
});


$(document).ready(function() {
    var $element = $('.summ');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        //var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {



            const convert = str => {
                // Find the number
                let regx = /(\d{1,3})(\d{3}(?:,|$))/;
                // Set a variable
                let currStr;
                // Start loop
                do {
                    // Replace current string, split it
                    currStr = (currStr || str.split(`.`)[0])
                        .replace(regx, `$1,$2`)
                } while (currStr.match(regx)); // Loop

                // Return our result from function
                return (str.split(`.`)[1]) ?
                    currStr.concat(`.`, str.split(`.`)[1]) :
                    currStr;
            };


            function total() {
                let total = 0;
                $('.count').each(function() {
                    let v = parseInt($(this).text());
                    total = v + total
                })
                return total;
            }

            $('#sum').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1300,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                        $(this).text(convert($(this).text()))
                    }
                });
            });






            counter = 1;
        }
    });


});