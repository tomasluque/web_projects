const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// Toggle navigation
toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav");
});

// Show modal
open.addEventListener("click", () => {
    modal.classList.add("show-modal");
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");
});

window.addEventListener("click", (event) => {
    event.target == modal ? modal.classList.remove("show-modal") : false;
});
