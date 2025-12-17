import Barra_navegacion from "../../Componentes/Barra_navegacion/barra_navegacion.js";

const cuerpo_pagina = document.getElementsByTagName("body")[0]

const barra_navegacion = new Barra_navegacion(1).renderizar()

cuerpo_pagina.insertAdjacentElement("afterbegin", barra_navegacion)

const diseño_responsivo = () => {
    if (window.matchMedia("(min-width: 1000px)").matches) {
        
    }

    else if (window.matchMedia("(min-width: 500px)").matches) {
        
    }

    else {
        
    }
}

window.addEventListener("resize", diseño_responsivo)