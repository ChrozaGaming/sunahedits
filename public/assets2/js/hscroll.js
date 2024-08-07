$(function () {
  var width = $(window).width();
  if (width > 991) {

    /* ===============================  scroll  =============================== */

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    var container = document.querySelector(".thecontainer");
    if (container) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () => "+=" + container.offsetWidth
        }
      });
    } else {
      console.error('Element with class "thecontainer" not found');
    }
  }
});