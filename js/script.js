// Кнопка «вгору»
$(document).ready(function () {
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

// Активація wow.min.js
new WOW().init();

// Анімація svg
const IPDStatusSvg = new Vivus(
  'IPD_status_svg', {
    type: 'delayed',
    duration: 500,
    start: 'autostart',
  },
);

const administrativeServiceCenterSvg = new Vivus(
  'administrative_service_center_svg', {
    type: 'delayed',
    duration: 500,
  },
);

const humanitarianHelpSvg = new Vivus(
  'humanitarian_help_svg', {
    type: 'delayed',
    duration: 500,
  },
);