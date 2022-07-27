$(document).ready(function() {
    //the trigger on hover when cursor directed to this class
    $(".core-menu li").click(
        function() {
            //i used the parent ul to show submenu
            $(this).children('ul').toggleClass(".fast");
        },
        //when the cursor away 
        function() {
            var isFast = $(this).children('ul').is('.fast');
            $('.core-menu li ul.fast').removeClass('fast');
            $(this).children('ul').toggleClass('fast', !isFast);

        });
    //this feature only show on 600px device width
    $(".hamburger-menu").click(function() {
        $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").toggleClass("fast");
        $(".main-menu").toggleClass("menu-open");
    });
});


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


var btn = $('#back-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '700');
});


$(window).scroll(function() {
    scrollDistance = $(window).scrollTop() + $(window).height();
    footerDistance = $('.page-footer').offset().top;

    if (scrollDistance >= footerDistance) {
        $("#back-top").addClass("close-fixed-btn");
    } else {
        $("#back-top").removeClass("close-fixed-btn");
    }
})







$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: '.slider-for',
    responsive: [{
        // If Screen Size More than 768px
        breakpoint: 1200,
        settings: {
            dots: true,
            arrows: false,
        }
    }]
});
$('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    dots: false,
    focusOnSelect: true
});



$('.testimonial-sec-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    swipe: true,
    responsive: [{
        // If Screen Size More than 768px
        breakpoint: 1200,
        settings: {
            dots: true,
            arrows: false,
            centerMode: true,
            variableWidth: true,
        }
    }]
});



$('.testimonial-sec-slider-city-page').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    swipe: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            dots: true,
            arrows: false,
            centerMode: true,
            variableWidth: true,
        }
    }]
});


$('.partners-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    swipe: true,
    responsive: [{
        // If Screen Size More than 768px
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});



// FOOTER

// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
    el.addEventListener("click", () => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        } else {
            accordionItem.forEach((el2) => el2.classList.remove("active"));
            el.classList.add("active");
        }
    })
);


$(document).ready(function() {
    $(".accordion-set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".accordion-set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".accordion-set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".accordion-set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});



$('.expert-team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    swipe: true,
    responsive: [{
        // If Screen Size More than 768px
        breakpoint: 1200,
        settings: {
            dots: true,
            arrows: false,
            variableWidth: true,
        }
    }]
});

// sticky section in scrolling

$(function() {
    var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#sidebar').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
                $('#sidebar').removeClass('fixed').css({
                    // position: 'absolute',
                    // top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#sidebar').removeClass('fixed');
        }
    });
});








$(".button").click(function() {
    $("body").addClass('modal-open');
    $("#step-form").css("display", "block");

});


$(".cancel").click(function() {
    $("body").removeClass('modal-open');
    $("#step-form").fadeOut();
});



$(".succes-modal-btn").click(function() {
    $("body").addClass('modal-open');
    $("#success-modal").css("display", "block");
});


$(".success-modal-cancel").click(function() {
    $("body").removeClass('modal-open');
    $("#success-modal").css("display", "none");
});


$(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function() {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(current_fs)).addClass("active");
        //$("#account").addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function() {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function() {
        return false;
    })

});











function handleClick(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    let buttonValue = event.target.innerText;
    document.querySelector("#result" + event.data.id).innerText = buttonValue;
}

$(".buttons1").on("click", {
    id: "1"
}, handleClick);
$(".buttons2").on("click", {
    id: "2"
}, handleClick);
$(".buttons3").on("click", {
    id: "3"
}, handleClick);


$(function() {
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast"
    });
});



$(document).ready(function() {
    $(".buttons1 button").click(function() {
        $('.buttons1 button').removeClass("radio-selected");
        $(this).addClass("radio-selected");
    });
});


$(document).ready(function() {
    $(".buttons2 button").click(function() {
        $('.buttons2 button').removeClass("radio-selected");
        $(this).addClass("radio-selected");
    });
});


$(document).ready(function() {
    $(".buttons3 button").click(function() {
        $('.buttons3 button').removeClass("radio-selected");
        $(this).addClass("radio-selected");
    });
});


$(document).ready(function() {
    $(".mbuttons button").click(function() {
        $(this).addClass("radio-selected");
        var text = $(this).text();
        $("#mresult").append(text + ", ");
        // $("#mresult").append("<span>"+text+"</span>");
    });
});




// Dealing with Input width
let widthMachine = document.querySelector(".width-machine");

// Dealing with Textarea Height
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
}

let textarea = document.querySelector(".resize-ta");
textarea.addEventListener("keyup", () => {
    textarea.style.height = calcHeight(textarea.value) + "px";
});