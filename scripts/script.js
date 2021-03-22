// Скрытие хэдера при скролле вниз и отображение при скролле вверх
var prevScrollpos = window.pageYOffset;
$(window).on("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  var headerDivHeight = $("#navbar").outerHeight();
  if (prevScrollpos > currentScrollPos) {
    $(".header-bg").css('top', '0')
  } else {
    $(".header-bg").css('top', `-${headerDivHeight}px`)
  }
  prevScrollpos = currentScrollPos;

  // Добавление непрозрачного фона хэдеру при скролле ниже 70 пикселей
  // Добавление прозрачного фона при нахождении наверху страницы
  if ($(window).scrollTop() > 70) {

  } else {
    $(".header-bg").css('top', '0');
    $(".header-bg").css({
      "background-color": "transparent"
    });
  }

  if ($(window).scrollTop() > 150) {
    $(".header-bg").css({
      "background-color": "#0062FF"
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
        var footerDivHeight = $("#footer").outerHeight();
        
        var onboardingDiv = document.querySelector('#onboarding');
        var onboardingDivBottom = onboardingDiv.getBoundingClientRect().bottom;
        
        var buttonWidth = document.querySelector('#action-button').offsetWidth;
        var leftButtonIndent = ($(window).width() - buttonWidth) / 2 + 'px';
        
        if (onboardingDivBottom < document.documentElement.clientHeight) {
          $(".onboarding-button").css({
            "opacity": "0"
          });

          if (onboardingDivBottom < document.documentElement.clientHeight - 70) {
            $(".onboarding-button").removeClass("button-transparent button-transparent-big");
            $(".onboarding-button").addClass("button-blue");
            $(".onboarding-button-text").css({
              "display":"none",
            });
            $(".onboarding-button").css({
              "opacity": "1",
              "left":"2rem",
              "padding": "1rem",
              "bottom":"15%"
            });

            if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 350) {
              $(".onboarding-button").css({
                "opacity": "0"
              });


              if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 50) {
                $(".onboarding-button-text").css({
                  "display":"inline",
                });
                $(".onboarding-button").css({
                  "opacity": "1",
                  "left": leftButtonIndent,
                  "padding": "1rem 2rem",
                  "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
                });
              } else if (distanceFromBottom <= footerDivHeight - distanceFromBottom + 250) {
                $(".onboarding-button-text").css({
                  "display":"inline",
                });
                $(".onboarding-button").css({
                  "opacity": "0",
                  "left": leftButtonIndent,
                  "padding": "1rem 2rem",
                  "bottom": `${footerDivHeight - distanceFromBottom + 50}px`
                });
              }
            }
          }
        } else {
          $(".onboarding-button").css({
            "opacity":"1",
            "left":"10.5%",
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

let item1Css = {
  'left': '0',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};
let item2Css = {
  'left': '12.982rem',
  'top': '1rem',
  'transform': 'rotate(0deg)'
};
let item3Css = {
  'left': '26.04rem',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};
let item4Css = {
  'left': '39.21rem',
  'top': '1rem',
  'transform': 'rotate(0deg)'
};
let item5Css = {
  'left': '52.081rem',
  'top': '-3.5rem',
  'transform': 'rotate(180deg)'
};


// let regex = /client-path-steps-item-/;

// $(".client-path-steps-item").click(function(){
//   let classes = this.className.split(' ');
//   classes.forEach(class => {
//     return class.match(regex);
//   });
// });

$(".client-path-steps-item").hover(function(){
    let stepName = this.className.split(' ')[1];
    let stepNumber = stepName[stepName.length - 1];
    $(`.dot-${stepNumber}`).addClass('dot-hovered');
  }, function(){
    let stepName = this.className.split(' ')[1];
    let stepNumber = stepName[stepName.length - 1];
    $(`.dot-${stepNumber}`).removeClass('dot-hovered');
});

$(".client-path-steps-item").click(function(){
  let stepName = this.className.split(' ')[1];
  let stepNumber = stepName[stepName.length - 1];
  $('.dot-clicked').removeClass('dot-clicked');
  $(`.dot-${stepNumber}`).addClass('dot-clicked');
  $('.arrows').css(eval('item'+ stepNumber + 'Css'));
});

$(".dot").click(function(){
  $('.dot-clicked').removeClass('dot-clicked');
  $(this).addClass('dot-clicked');
  if ($(this).hasClass("dot-1")) {
    $('.arrows').css(item1Css);
  } else if ($(this).hasClass("dot-2")) {
    $('.arrows').css(item2Css);
  } else if ($(this).hasClass("dot-3")) {
    $('.arrows').css(item3Css);
  } else if ($(this).hasClass("dot-4")) {
    $('.arrows').css(item4Css);
  } else if ($(this).hasClass("dot-5")) {
    $('.arrows').css(item5Css);
  }
});


// Переключение между публичным и уникальным разделом на странице Каталога API
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


