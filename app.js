// setting for nav
const hamburger = document.querySelector(".hamburger");
const hamburgerLine = document.querySelectorAll(".line")
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  hamburgerLine.forEach(line => {
    line.classList.toggle("open");
  });
});
links.forEach(link =>{
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    links.forEach(link => {
      link.classList.remove("fade");
    });
    hamburgerLine.forEach(line =>{
      line.classList.remove('open');
    });
  });
});



// // barba
// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//       setTimeout(() => {
//           done();
//       }, n);
//   });
// }

// function pageTransition() {
//   var tl = gsap.timeline();
//   tl.to(".hashira", {duration: 2, top: "-150%", ease: "slow(0.5, 0.9, false)", stagger: 0.1, delay: 0.2});
//   tl.set(".hashira", {bottom: "-105%"});
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
//   tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
// }

// $(function () {
//   barba.init({
//       sync: true,

//       transitions: [
//           {
//               async leave(data) {
//                   const done = this.async();

//                   pageTransition();
//                   await delay(1000);
//                   done();
//               },

//               async enter(data) {
//                   contentAnimation();
//               },

//               async once(data) {
//                   contentAnimation();
//               },
//           },
//       ],
//   });
// });
