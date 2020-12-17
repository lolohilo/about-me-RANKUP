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
      line.classList.toggle("open")
  })
});
