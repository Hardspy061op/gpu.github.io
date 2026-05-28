const impasible  = document.querySelectorAll(".impossible");
const pasible  = document.querySelectorAll(".possible");
const eraly  = document.querySelectorAll(".early");

const dispossible = document.getElementById("not_possible");
const inpossible = document.getElementById("is_possible");
const erary = document.getElementById("too_early");

document.querySelectorAll(".impossible").forEach(x => {
    x.addEventListener("click" ,() => {
        dispossible.classList.toggle("active");
    });
})
document.querySelectorAll(".possible").forEach(x => {
    x.addEventListener("click" ,() => {
        inpossible.classList.toggle("active");
    });
})
document.querySelectorAll(".early").forEach(x => {
    x.addEventListener("click" ,() => {
        erary.classList.toggle("active");
    });
})

const ok_buttons = document.querySelectorAll(".billu");

document.querySelectorAll(".billu").forEach(x => {
    x.addEventListener("click" ,() => {
        dispossible.classList.remove("active");
        erary.classList.remove("active");
    });
});