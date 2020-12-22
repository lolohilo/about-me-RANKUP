// setting for nav
const hamburger = document.querySelector(".hamburger");
const hamburgerLine = document.querySelectorAll(".line")
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
console.log(hamburgerLine);

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  hamburgerLine.forEach(line => {
      line.classList.toggle("open");
  });
});


//page transition animation
function pageTransition(){
  var tl = gsap.timeline();
  tl.to('ul.transition li', {duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
  tl.to('ul.transition li', {duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: 0.1})
}
function contentAnimation(){
  var tl = gsap.timeline();
  tl.from('.name-box', {duration: 1.5, translateX: 50, opacity:0})
}
function delay(n){
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transition: [{
    async leave(data){
      const done = this.async();
      pageTransition();
      await delay(1500);
      done();
    },
    async enter(data){
      contentAnimation()
    },
    async once(data){
      contentAnimation()
    }
  }]
})