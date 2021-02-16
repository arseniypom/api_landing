// Скрытие хэдера при скролле вниз и отображение при скролле вверх
var prevScrollpos = window.pageYOffset;
$(window).on("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".header").css('top', '0')
  } else {
    $(".header").css('top', '-70px')
  }
  prevScrollpos = currentScrollPos;
});

// Добавление непрозрачного фона хэдеру при скролле ниже ста пикселей
// Добавление прозрачного фона и отображение хэдера при нахождении наверху страницы
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("bg-color");
    } else {
       $(".header").removeClass("bg-color");
       $(".header").css('top', '0')
    }
});

function closeCookieBanner() {
  $(".cookie-banner").css('display', 'none');
}

// Анимирование кнопки
var window_width = $(window).width() - $('.fixed-button').width();

var document_height = $(document).height() - $(window).height();


$(function () {
    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        var winWdith = $(window).width();

        var lastNewsCard = document.querySelector('#lastNewsCard');
        var lastNewsCardBottom = lastNewsCard.getBoundingClientRect().bottom;

        var footerDiv = document.querySelector('#footer');
        var footerDivTop = footerDiv.getBoundingClientRect().top;
        
        var onboardingDiv = document.querySelector('#onboarding');
        var onboardingDivBottom = onboardingDiv.getBoundingClientRect().bottom;
        console.log(footerDivTop);

        if (onboardingDivBottom < document.documentElement.clientHeight) {
          $(".fixed-button").css({
            "position": "fixed",
            "left": "2rem"
          });
          $(".onboarding-button").addClass("button-blue button-blue-square");
          $(".onboarding-button").removeClass("button-transparent button-transparent-big");

          if (footerDivTop < (window.innerHeight || document.documentElement.clientHeight)) {
            $(".news-action-button").addClass("button-blue-big");
            $(".news-action-button").removeClass("button-blue-square");
            $(".news-action").removeClass("fixed-button-hidden");
            $(".news-action").addClass("news-action-active");
            $(".onboarding-action").addClass("fixed-button-hidden");
          } else {
            $(".news-action-button").removeClass("button-blue-big");
            $(".news-action-button").addClass("button-blue-square");
            $(".news-action").addClass("fixed-button-hidden");
            $(".news-action").removeClass("news-action-active");
            $(".onboarding-action").removeClass("fixed-button-hidden");
          }
        } else {
          $(".fixed-button").css({
            "position": "unset",
          });
          $(".onboarding-button").removeClass("button-blue button-blue-square");
          $(".onboarding-button").addClass("button-transparent button-transparent-big");
        }

        // $(".fixed-button").css('left',(scrollValue / 2)+'px');


        if (lastNewsCardBottom > (window.innerHeight || document.documentElement.clientHeight)) {
          // console.log("Out");
        } else {
          // console.log("In");
        }

        // if (bounding.top > 0) {
        //   console.log("In");
        // } else {
        //   console.log("Out");
        // }
    });
});

// Our element
// var newsDiv = document.querySelector('#news');
var elem = document.querySelector('#lastNewsCard');
var bounding = elem.getBoundingClientRect();
// Set our distance placeholder
var distance = 0;
// Loop up the dom
do {
    // Increase our distance counter
    distance += elem.offsetTop;

    // Set the element to it's parent
    elem = elem.offsetParent;
    // if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
    //   console.log("Out");
    // } else {
    //   console.log("In");
    // }
} while (elem);
distance = distance < 0 ? 0 : distance;


