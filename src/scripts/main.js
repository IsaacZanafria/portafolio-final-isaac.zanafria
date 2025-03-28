import {stays} from "./stays.js";
import { cargarCards } from "./utils.js";
import { menuToggle } from "./utils.js";
import { openLocation } from "./utils.js";
import { openGuests } from "./utils.js";
import { closeBox } from "./utils.js";
import { guestsToggle } from "./utils.js";
import { locationToggle } from "./utils.js";
import { menu } from "./utils.js";
import { locationBox } from "./utils.js";

//CONST
const contenedorCards = document.querySelector("#contenedorCards")
const cerrar = document.querySelector(`#cerrar`)
const btnClose = document.querySelector(`#btn_close`)
const locationBtn = document.querySelector(`#location_btn`)
const guestsBtn = document.querySelector(`#guests_btn`)
const searchBtn = document.querySelector(`#search_btn`)
const locationForm = document.querySelector(`#location_form`)
const guestsForm = document.querySelector(`#guests_form`)
const locationInput = document.querySelector(`#location`)
const listaLocation = document.querySelector(`#lista_location`)
const guestsInput = document.querySelector(`#guests`)
const adultsBox = document.querySelector(`#adults_box`)
const adultsInput = document.querySelector(`#adults_input`)
const childrenBox = document.querySelector(`#children_box`)
const childrenInput = document.querySelector(`#children_input`)
const buttonSearch = document.querySelector(`#button_search`)
const span = document.querySelector("#span")

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
buttonSearch.addEventListener("click",filterStays)

//FUNCTION
//LOCATION
function opcionLocation(e){
    const {target} = e
    const {tagName} = target
    
    if(tagName === "LI"){
        const cleanText = target.textContent.trim();
        locationInput.value = cleanText;
        locationBtn.innerHTML = cleanText;
        locationBox.classList.toggle('hidden');
    }
}

//GUESTS
//adults
function adultButtons(e){
    const {target} = e
    const {tagName} = target
    const currentAdultsInput = parseInt(adultsInput.value)
    const currentGuestsInput = parseInt(guestsInput.value) || 0
    
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
    const currentGuestsInput = parseInt(guestsInput.value) || 0

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

//FILTRO POR MEDIO DE BOTON BUSCAR
function filterStays(){
  let locationValue = (locationInput.value).split(",")[0];
  let guestValue = parseInt(guestsInput.value) || 0
  let staysFilter = stays

  if(locationValue !== "" && guestValue === 0){
    staysFilter = stays.filter((array) => array.city.toLowerCase() === locationValue.toLowerCase())
  }else if(locationValue === "" && guestValue > 0){
    staysFilter = stays.filter((array) => array.maxGuests >= guestValue)
   
  }else if(locationValue !== "" && guestValue >= 0){
    staysFilter = stays.filter((array) => array.maxGuests >= guestValue && array.city.toLowerCase() === locationValue.toLowerCase())
  }

  if(staysFilter.length < 12){
    span.innerHTML = staysFilter.length
  }else{
    span.innerHTML = "12+"
  }
  cargarCards(staysFilter, contenedorCards)
  menu.classList.toggle(`hidden`)
  
}
