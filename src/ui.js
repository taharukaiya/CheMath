document.querySelector(".mobile-menu-button").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.toggle("hidden");
  gsap.fromTo('.mobile-menu', {
    x: 50,
  }, {
    x: 0,
    duration: 1
  })
});


gsap.fromTo('.form_container', {
  x: 400,
  y: 500
}, {
  x: 0,
  y: 0,
  duration: 2
})
gsap.fromTo('.intro_image', {
  x: -300,
  y: 500
}, {
  x: 0,
  y: 0,
  duration: 2
})
gsap.fromTo('nav', {
  x: 50
}, {
  x: 0,
  duration: 2
})