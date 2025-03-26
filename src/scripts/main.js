import {stays} from "./stays.js";
import { cargarCards } from "./utils.js";
//CONST
const contenedorCards = document.querySelector("#contenedorCards")

const menu = document.querySelector(`#menu`)
const cerrar = document.querySelector(`#cerrar`)
const btnClose = document.querySelector(`#btn_close`)
const buttonsContenedor = document.querySelector(`#buttons_contenedor`)

const guestsBox = document.querySelector(`#guests_box`)
const locationBox = document.querySelector(`#location_box`)
const locationForm = document.querySelector(`#location_form`)
const guestsForm = document.querySelector(`#guests_form`)

//EVENT
cargarCards(stays, contenedorCards)
buttonsContenedor.addEventListener("click",menuToggle)
cerrar.addEventListener("click",closeBox)
btnClose.addEventListener("click",closeBox)
locationForm.addEventListener("click", locationToggle)
guestsForm.addEventListener("click", guestsToggle)

//FUNCTION
//abrir y cerrar
function menuToggle(){
    menu.classList.toggle(`hidden`)
}
function closeBox(){
    menu.classList.add(`hidden`)
    guestsBox.classList.add(`hidden`)
    locationBox.classList.add(`hidden`)
}
function guestsToggle(){
    guestsBox.classList.toggle(`hidden`)
    locationBox.classList.add(`hidden`)
}
function locationToggle(){
    locationBox.classList.toggle(`hidden`)
    guestsBox.classList.add(`hidden`)
}
