import {stays} from "./stays.js";
import { cargarCards } from "./utils.js";

//CONST
const contenedorCards = document.querySelector("#contenedorCards")

const menu = document.querySelector(`#menu`)
const cerrar = document.querySelector(`#cerrar`)
const btnClose = document.querySelector(`#btn_close`)
const locationBtn = document.querySelector(`#location_btn`)
const guestsBtn = document.querySelector(`#guests_btn`)
const searchBtn = document.querySelector(`#search_btn`)

const guestsBox = document.querySelector(`#guests_box`)
const locationBox = document.querySelector(`#location_box`)
const locationForm = document.querySelector(`#location_form`)
const guestsForm = document.querySelector(`#guests_form`)

const locationInput = document.querySelector(`#location`)
const listaLocation = document.querySelector(`#lista_location`)

const guestsInput = document.querySelector(`#guests`)
const adultsBox = document.querySelector(`#adults_box`)
const adultsInput = document.querySelector(`#adults_input`)
const childrenBox = document.querySelector(`#children_box`)
const childrenInput = document.querySelector(`#children_input`)

//EVENT
cargarCards(stays, contenedorCards)

searchBtn.addEventListener("click",menuToggle)
locationBtn.addEventListener("click", openLocation)
guestsBtn.addEventListener("click", openGuests)
cerrar.addEventListener("click",closeBox)
btnClose.addEventListener("click",closeBox)

locationForm.addEventListener("click", locationToggle)
listaLocation.addEventListener("click",opcionLocation)

guestsForm.addEventListener("click", guestsToggle)
adultsBox.addEventListener("click", adultButtons)
childrenBox.addEventListener("click", childrenButtons)

//FUNCTION
//abrir y cerrar elementos menu
function menuToggle(){
    menu.classList.toggle(`hidden`)
  }
function openLocation(){
    menu.classList.toggle(`hidden`)
    locationBox.classList.toggle(`hidden`)
  }
function openGuests(){
    menu.classList.toggle(`hidden`)
    guestsBox.classList.toggle(`hidden`)
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

//location
function opcionLocation(e){
    const {target} = e
    const {tagName} = target

    if(tagName === "LI"){
      locationInput.value = target.textContent
      locationBtn.innerHTML = target.textContent
      locationBox.classList.toggle(`hidden`)
    }
}

//GUESTS
//adults
function adultButtons(e){
    //guestsInput.value = "0"
    const {target} = e
    const {tagName} = target
    const currentAdultsInput = parseInt(adultsInput.value)
    const currentGuestsInput = parseInt(guestsInput.value)
    
    if(tagName === "BUTTON"){
        if(target.value === "-"){
            adultsInput.value = currentAdultsInput - 1;
            guestsInput.value = currentGuestsInput - 1 + "  guests";
            
            if(adultsInput.value < 0 || guestsInput.value < 0){
                adultsInput.value = currentAdultsInput - 0;
                guestsInput.value = currentGuestsInput - 0 + "  guests"
            }

        }else if(target.value === "+"){
            adultsInput.value = currentAdultsInput + 1;
            guestsInput.value = currentGuestsInput + 1 + "  guests";
        }

        guestsBtn.innerHTML = guestsInput.value
    }
}


//children
function childrenButtons(e){
    //guestsInput.value = "0"
    const {target} = e
    const {tagName} = target
    const currentChildrenInput = parseInt(childrenInput.value)
    const currentGuestsInput = parseInt(guestsInput.value)

    if(tagName === "BUTTON"){

        if(target.value === "-"){
            childrenInput.value = currentChildrenInput - 1;
            guestsInput.value = currentGuestsInput - 1 + "  guests";

            if(childrenInput.value < 0 || guestsInput.value < 0){
                childrenInput.value = currentChildrenInput - 0;
                guestsInput.value = currentGuestsInput - 0 + "  guests"
            }

        }else if(target.value === "+"){
            childrenInput.value = currentChildrenInput + 1;
            guestsInput.value = currentGuestsInput + 1 + "  guests";
        }
        
        guestsBtn.innerHTML = guestsInput.value
    }
}

