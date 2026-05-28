const menue_bar = document.getElementById("meenu-bar");
const side_bar = document.getElementById("sidde-bar");
const button_1 = document.getElementById("btn1");
const button_2 = document.getElementById("btn2");

const nav_h1 = document.getElementById("please1");
const nav_h2 = document.getElementById("please2");
const nav_h3 = document.getElementById("please3");
const khi1 = document.getElementById("noov1");
const khi2 = document.getElementById("noov2");
const khi3 = document.getElementById("noov3");

const yeah = document.querySelectorAll(".yeah");
const music = document.getElementById("music");

menue_bar.addEventListener("click", () => {
  side_bar.classList.toggle("active");
  button_1.classList.toggle("active");
  button_2.classList.toggle("active");
});

khi1.addEventListener("click", () => {
  nav_h1.classList.toggle("active");
});

khi2.addEventListener("click", () => {
  nav_h2.classList.toggle("active");
});

khi3.addEventListener("click", () => {
  nav_h3.classList.toggle("active");
});

const plizz = document.getElementById("plez1");
document.querySelectorAll(".plez").forEach((x) => {
  x.addEventListener("click", () => {
    plizz.classList.toggle("active");
  });
});

const dont = document.getElementById("do_not");
document.querySelectorAll(".nah").forEach((x) => {
  x.addEventListener("click", () => {
    dont.classList.toggle("active");
  });
});
