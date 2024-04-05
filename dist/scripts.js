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
    .fromTo("#hero .box-title",{
      opacity: 0,
      y: 50,
      duration: 1,
    },{
      opacity: 1,
      y: 0,
    }, "-=1")
    .fromTo("#hero .event-data",{
      opacity: 0,
      y: 50,
      duration: .5,
    },{
      opacity: 1,
      y: 0,
    }, "-=.8")
    .fromTo("#hero .box-buttons",{
      opacity: 0,
      y: 50,
      duration: .5,
    },{
      opacity: 1,
      y: 0,
    }, "-=.5")
    .from("header",{
      opacity: 0,
      y: -50,
      duration: .5,
    }, "-=.4")

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

    aboutAnimation.fromTo('#about h3, #about hr, #about p, #about .detail-box, #about h4', {
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
    .from("#speakers h2, #speakers hr",{
      opacity: 0,
      y: 50,
      stagger: 0.1,
    })
    .from("#speakers .speakers-box",{
      opacity: 0,
      y: 50,
      stagger: 0.1,
    });

    // ABOUT WORKBENCH SECTION 
    let aboutWorkbenchAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-workbench',
        start: '-10% 50%',
        end: '30% 50%',
        scrub: 3,
        once: true,
        // markers: true,
      }
    });
    aboutWorkbenchAnimation
    .from("#about-workbench",{
      opacity: 0,
      scale: 1.02,
      duration: 1.5,
    })
    .from("#about-workbench h2, #about-workbench hr",{
      opacity: 0,
      y: 50,
      stagger: .2,
      duration: 1,
    })
    .from("#about-workbench .about-box",{
      opacity: 0,
      scale: .95,
      y: 50,
      duration: 1,
    }, "-=1")
  });
  // END WINDOW READY
});

/******/ })()
;