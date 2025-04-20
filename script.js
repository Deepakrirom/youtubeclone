let menuIcon = document.querySelector(".fa-solid");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container")

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}