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

  // Добавление непрозрачного фона хэдеру при скролле ниже 190 пикселей
  // Добавление прозрачного фона при нахождении наверху страницы
  if ($(window).scrollTop() > 190) {
    $(".header").css({
      "background-color": "#0062FF"
    });
  } else {
    $(".header").css({
      "background-color": "transparent"
    });
  }
});


function closeCookieBanner() {
  $(".cookie-banner").css('display', 'none');
}

// Анимирование кнопки

$(function () {
    $(window).scroll(function () {
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
            "left":"8.75%",
            "bottom":"15%",
            "padding":"1rem 2rem"
          });
          $(".onboarding-button").removeClass("button-blue");
          $(".onboarding-button").addClass("button-transparent button-transparent-big");
          $(".onboarding-button-text").css({
            "display":"inline",
          })
        }
    });
});



