const showMore = document.querySelectorAll('.more');
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const box = document.querySelector(".modal-box");
const header = document.querySelector("header");
// const overlay = document.querySelector(".overlay");

const toggleModal = () => {
    modal.classList.toggle("hide");
    box.classList.toggle("hide");
    header.classList.toggle("up");
    changeOverflow();
};

const changeOverflow = () => {
    if (modal.classList.contains("hide")) {
        document.body.style.overflow = "auto";

    } else {
        document.body.style.overflow = "hidden";
    }
};

showMore.forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

closeModal.addEventListener("click", () => toggleModal());

document.addEventListener("click", function (evt) {
    // adaptado de https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
    let clicado = evt.target; 
    if (clicado == modal) {
        // This is a click inside, does nothing, just return.
        console.log('Clicked inside!');
        return;
    } else if (clicado == box) {
        // This is a click inside, does nothing, just return.
        console.log('Clicked outside!');
        toggleModal();
        return;
    }
    // Go up the DOM
    clicado = clicado.parentNode;
});