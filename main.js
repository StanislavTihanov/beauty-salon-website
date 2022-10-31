
const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu");
const body = document.querySelector('#body');
hamb.addEventListener("click", hambHandler);

function hambHandler(event) {
    hamb.classList.toggle("active");
    menu.classList.toggle("open");
    body.classList.toggle("lock");
}


