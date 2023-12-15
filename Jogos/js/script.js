const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const openModalButton = document.querySelector("#btn2")
const openModalButton2 = document.querySelector("#btn3")
const openModalButton3 = document.querySelector("#btn4")

const closeModalButton = document.querySelector("#close-modal")
const closeModalButton2 = document.querySelector("#close-modal2")
const closeModalButton3 = document.querySelector("#close-modal3")
const modal = document.querySelector("#modal")
const modal2 = document.querySelector("#modal2")
const modal3 = document.querySelector("#modal3")
const fade = document.querySelector("#fade")
const fade2 = document.querySelector("#fade2")
const fade3 = document.querySelector("#fade3")

const toggleModal = () =>{
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}


//PRIMEIRO MODAL
[openModalButton, closeModalButton, fade].forEach((el) =>{
    el.addEventListener("click", () => toggleModal())
})
//SEGUNDO MODAL
function abrirModal2(){

        modal2.classList.toggle("hide2-1")
        fade2.classList.toggle("hide2")
}

function fecharModal2(){
    modal2.classList.toggle("hide2-1")
    fade2.classList.toggle("hide2")
}
//TERCEIRO MODAL
function abrirModal3(){

    modal3.classList.toggle("hide3-1")
    fade3.classList.toggle("hide3")
}

function fecharModal3(){
modal3.classList.toggle("hide3-1")
fade3.classList.toggle("hide3")
}



function trocarFundoElden() {
    document.body.style.backgroundImage = 'url(/image/fundo_eldenring.jpg)'
    console.log('teste1')
}

function trocarFundoNioh() {
    document.body.style.backgroundImage = 'url(/image/fundo_nioh.jpg)'
    console.log('teste2')
}

function trocarFundoSekiro() {
    document.body.style.backgroundImage = 'url(/image/fundo_sekiro.jpg)'
    console.log('teste3')
}

img1.addEventListener('click', trocarFundoElden)
img2.addEventListener('click', trocarFundoNioh)
img3.addEventListener('click', trocarFundoSekiro)
openModalButton2.addEventListener('click', abrirModal2)
closeModalButton2.addEventListener('click', fecharModal2)
openModalButton3.addEventListener('click', abrirModal3)
closeModalButton3.addEventListener('click', fecharModal3)