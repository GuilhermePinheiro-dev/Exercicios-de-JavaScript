const btnTrocaCor = document.getElementById("btnTrocaCor")

const quadradoAzul = document.querySelector(".azul")

btnTrocaCor.addEventListener("click", trocaCor)

function trocaCor(){
    quadradoAzul.classList.remove("azul")
    quadradoAzul.classList.add("amarelo")
}
