import {stays} from "./stays.js";
import { cargarCards } from "./utils.js";

const contenedorCards = document.querySelector("#contenedorCards")

cargarCards(stays, contenedorCards)