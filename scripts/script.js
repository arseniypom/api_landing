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
        // var scrollValue = $(window).scrollTop();
        // var winWdith = $(window).width();
        var distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

        var lastNewsCard = document.querySelector('#lastNewsCard');
        var lastNewsCardBottom = lastNewsCard.getBoundingClientRect().bottom;

        var footerDiv = document.querySelector('#footer');
        var footerInfoDiv = document.querySelector('.footer-info');
        // var footerDivTop = footerDiv.getBoundingClientRect().top;
        var footerInfoDivBottom = footerInfoDiv.getBoundingClientRect().bottom;
        var footerDivHeight = $("#footer").outerHeight();
        
        var onboardingDiv = document.querySelector('#onboarding');
        var onboardingDivBottom = onboardingDiv.getBoundingClientRect().bottom;

        if (onboardingDivBottom < document.documentElement.clientHeight) {
          $(".onboarding-button").css({
            "left":"2rem",
            "padding": "1rem"
          });
          $(".onboarding-button").removeClass("button-transparent button-transparent-big");
          $(".onboarding-button").addClass("button-blue");
          $(".onboarding-button-text").css({
            "display":"none",
          })

          if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 50) {
            $(".onboarding-button").css({
              "left":"43%",
              "padding": "1rem 2rem",
              "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
            });
            $(".onboarding-button-text").css({
              "display":"inline",
            })
          } else {
            $(".onboarding-button").css({
              "left":"2rem",
              "padding": "1rem",
              "bottom": "15%"
            });
            $(".onboarding-button-text").css({
              "display":"none",
            })
          }
        } else {
          $(".onboarding-button").css({
            "left":"16%",
            "bottom":"15%",
            "padding":"1rem 2rem"
          });
          $(".onboarding-button").removeClass("button-blue");
          $(".onboarding-button").addClass("button-transparent button-transparent-big");
          $(".onboarding-button-text").css({
            "display":"inline",
          })
        }



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


