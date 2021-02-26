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

  // Добавление непрозрачного фона хэдеру при скролле ниже 70 пикселей
  // Добавление прозрачного фона при нахождении наверху страницы
  if ($(window).scrollTop() > 70) {
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

        // var lastNewsCard = document.querySelector('#lastNewsCard');
        // var lastNewsCardBottom = lastNewsCard.getBoundingClientRect().bottom;

        // var footerDiv = document.querySelector('#footer');
        // var footerInfoDiv = document.querySelector('.footer-info');
        // var footerDivTop = footerDiv.getBoundingClientRect().top;
        // var footerInfoDivBottom = footerInfoDiv.getBoundingClientRect().bottom;
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


// Анимация клиентского пути

$(".dot").click(function(){
  $('.dot-active').removeClass('dot-active');
  $(this).addClass('dot-active');
  if ($(this).hasClass("dot-1")) {
    $('.arrows').css({
      'left': '0',
      'top': '-3.5rem',
      'transform': 'rotate(180deg)'
    });
  } else if ($(this).hasClass("dot-2")) {
    $('.arrows').css({
      'left': '12.982rem',
      'top': '1rem',
      'transform': 'rotate(0deg)'
    });
  } else if ($(this).hasClass("dot-3")) {
    $('.arrows').css({
      'left': '26.04rem',
      'top': '-3.5rem',
      'transform': 'rotate(180deg)'
    });
  } else if ($(this).hasClass("dot-4")) {
    $('.arrows').css({
      'left': '39.21rem',
      'top': '1rem',
      'transform': 'rotate(0deg)'
    });
  } else if ($(this).hasClass("dot-5")) {
    $('.arrows').css({
      'left': '52.081rem',
      'top': '-3.5rem',
      'transform': 'rotate(180deg)'
    });
  }
});



// Переключение между публичным и уникальным разделом на страницу Каталога API
$('#public-api').click(function(){
  $('.catalog-switch-line').css({
    'margin-left': '0',
    'width': '12.063rem'
  });
  $('.catalog-bg-plus-img, .catalog-switch-plus-img').fadeToggle();
  $('.catalog-info-unique').hide();
  $('.catalog-info-public').show();
  $('.catalog-info-unique').fadeOut();
});

$('#unique-api').click(function(){
  $('.catalog-switch-line').css({
    'margin-left': '12.5rem',
    'width': '12.5rem'
  });
  $('.catalog-bg-plus-img, .catalog-switch-plus-img').fadeToggle();
  $('.catalog-info-public').hide();
  $('.catalog-info-unique').show();
});


