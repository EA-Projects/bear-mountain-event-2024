/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// Smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    500
  );
});

////// DOCUMENT LOAD
$(window).on('load', function () {
  wow = new WOW({
    boxClass: 'animate',
    animateClass: 'animated',
    offset: 200,
    mobile: true,
  });
  wow.init();
});

////// DISABLE ANIMATIONS ON MOBILE
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ||
  $(window).width() < 575
) {
  $('.animate').removeClass('animate'); // to remove transition
}

/////// FORM

$(document).ready(function () {
  var options_contact = {
    dataType: 'script',
    clearForm: false,
  };
  $('#register-form').ajaxForm(options_contact);

  // Trigger Animations only con Desktop
  let triggerAnimations = gsap.matchMedia();
  triggerAnimations.add("(min-width: 991px)", () => {
    // HERO SECTION 
    let heroAnimation = gsap.timeline({paused: false, delay: .5});
    heroAnimation
    .from("#hero",{
      opacity: 0,
      scale: 1.02,
      duration: 1.5,
    })
    .from("#hero .box-title",{
      opacity: 0,
      y: 50,
      duration: 1,
    }, "-=1")
    .from("#hero .event-data",{
      opacity: 0,
      y: 50,
      duration: .5,
    }, "-=.5")
    .from("#hero .box-buttons",{
      opacity: 0,
      y: 50,
      duration: .5,
    }, "-=.3")
    .from("header",{
      opacity: 0,
      y: -50,
      duration: .5,
      stagger: .2,
    }, "-=.2")

    let heroScrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: '70% 0%',
        end: '100% 100%',
        scrub: 3,
        // markers: true,
      }
    });

    heroScrollAnimation.fromTo('#hero .overlay.is-animated', {
      opacity: 0, 
    },{
      opacity: 1, 
    });

    // ABOUT SECTION
    let aboutAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: '10% 50%',
        end: '40% 50%',
        scrub: 2,
        once: true,
        // markers: true,
      }
    });

    aboutAnimation.fromTo('#about h3, #about hr, #about p, #about h4', {
      y: '80px',
      opacity: 0,
    },{
      y: '0',
      opacity: 1,
      stagger: 0.2
    });

    // SPEAKERS SECTION 
    let speakersAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#speakers',
        start: '5% 50%',
        end: '30% 50%',
        scrub: 2,
        once: true,
        // markers: true,
      }
    });
    speakersAnimation
    .from("#speakers .speakers-box:not(.more-speakers)",{
      x: 140,
    })
    .from("#speakers .speakers-box.more-speakers",{
      opacity: 0,
      scale: .95,
    })

    // APPLY SECTION 
    let applyAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#apply',
        start: '-10% 50%',
        end: '30% 50%',
        scrub: 3,
        once: true,
        // markers: true,
      }
    });
    applyAnimation
    .from("#apply",{
      opacity: 0,
      scale: 1.02,
      duration: 1.5,
    })
    .from("#apply h2, #apply hr, #apply p",{
      opacity: 0,
      y: 50,
      stagger: .2,
      duration: 1,
    })
    .from("#apply .form-box",{
      opacity: 0,
      scale: .95,
      y: 50,
      duration: 1,
    }, "-=1")
  });
  // END WINDOW READY
});

$(function () {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxRDInFTAMe4nn_9cHHnfbdToMsoEPpRpS5z8cMOne7S385ikUET5MbRIfUK83voo2UVg/exec';
    
  const form = document.getElementById('register-form');
  form.addEventListener('submit', (e) => {
    $('#register-form').addClass('disabled');
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
          $('#register-form').addClass("success");
          $('#success-message').addClass("success");
      })
      .catch((error) => {
        console.error('Error!', error.message);
        $('#register-form button, #register-form input').removeAttr('readonly');
      });
  });
});

var today = new Date();
var myDate = 'Date: ' + today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
var hour = 'Time: ' + today.getHours() + ':' + today.getMinutes();

var dateWithHour = myDate + ' ' + hour;

window.onload = function () {
  document.getElementById('datetime').value = dateWithHour;
};

/******/ })()
;