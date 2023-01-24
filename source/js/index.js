const botaotrailer = document.querySelector(".botao-trailer");
const botaofecharmodal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkvideo = video.scr;

function alternarmodal() {
    modal.classList.toggle("aberto");
}

botaotrailer.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("scr", linkvideo);
});

botaofecharmodal.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("src", "");
});

