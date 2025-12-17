class Barra_navegacion {
    constructor (usuario_iniciar_sesion) {
        this.usuario_iniciar_sesion = usuario_iniciar_sesion
    }

    renderizar() {
        const barra_navegacion = document.createElement("div")
        barra_navegacion.id = "barra_navegacion"


        /* Logo de la barra de navegacion */

        const contenedor_logo_barra_navegacion = document.createElement("div")
        contenedor_logo_barra_navegacion.id = "contenedor_logo_barra_navegacion"

        const logo_barra_navegacion = document.createElement("img")
        logo_barra_navegacion.id = "logo_barra_navegacion"
        logo_barra_navegacion.src = "../../Imagenes/logo.png"

        contenedor_logo_barra_navegacion.append(logo_barra_navegacion)


        /* Barra de busqueda */

        const barra_busqueda = document.createElement("div")
        barra_busqueda.id = "barra_busqueda"

        const entrada_barra_busqueda = document.createElement("input")
        entrada_barra_busqueda.id = "entrada_barra_busqueda"

        const boton_barra_busqueda = document.createElement("div")
        boton_barra_busqueda.id = "boton_barra_busqueda"
        boton_barra_busqueda.textContent = "Buscar"

        barra_busqueda.append(entrada_barra_busqueda, boton_barra_busqueda)


        /* Boton para abrir la barra de busqueda */

        const contenedor_boton_abrir_barra_busqueda = document.createElement("div")
        contenedor_boton_abrir_barra_busqueda.id = "contenedor_boton_abrir_barra_busqueda"

        const boton_abrir_barra_busqueda = document.createElement("img")
        boton_abrir_barra_busqueda.id = "boton_abrir_barra_busqueda"
        boton_abrir_barra_busqueda.src = "../../Imagenes/lupa.png"

        contenedor_boton_abrir_barra_busqueda.append(boton_abrir_barra_busqueda)


        /* Boton para cerrar la barra de busqueda */
        
        const contenedor_boton_cerrar_barra_busqueda = document.createElement("div")
        contenedor_boton_cerrar_barra_busqueda.id = "contenedor_boton_cerrar_barra_busqueda"

        const boton_cerrar_barra_busqueda = document.createElement("img")
        boton_cerrar_barra_busqueda.id = "boton_cerrar_barra_busqueda"
        boton_cerrar_barra_busqueda.src = "../../Imagenes/cerrar.png"

        contenedor_boton_cerrar_barra_busqueda.append(boton_cerrar_barra_busqueda)

        
        /* Categorias de la barra de navegacion */

        const contenedor_categorias_barra_navegacion = document.createElement("div")
        contenedor_categorias_barra_navegacion.id = "contenedor_categorias_barra_navegacion"
        contenedor_categorias_barra_navegacion.classList.add("cerrado")

        const categoria_comida_barra_navegacion = document.createElement("div")
        categoria_comida_barra_navegacion.id = "categoria_comida_barra_navegacion"
        categoria_comida_barra_navegacion.className = "categoria_barra_navegacion"
        categoria_comida_barra_navegacion.textContent = "Comida"

        const categoria_juguetes_barra_navegacion = document.createElement("div")
        categoria_juguetes_barra_navegacion.id = "categoria_juguetes_barra_navegacion"
        categoria_juguetes_barra_navegacion.className = "categoria_barra_navegacion"
        categoria_juguetes_barra_navegacion.textContent = "Juguetes"

        const categoria_arena_barra_navegacion = document.createElement("div")
        categoria_arena_barra_navegacion.id = "categoria_arena_barra_navegacion"
        categoria_arena_barra_navegacion.className = "categoria_barra_navegacion"
        categoria_arena_barra_navegacion.textContent = "Arena"

        const categoria_accesorios_barra_navegacion = document.createElement("div")
        categoria_accesorios_barra_navegacion.id = "categoria_accesorios_barra_navegacion"
        categoria_accesorios_barra_navegacion.className = "categoria_barra_navegacion"
        categoria_accesorios_barra_navegacion.textContent = "Accesorios"

        contenedor_categorias_barra_navegacion.append(categoria_comida_barra_navegacion, categoria_juguetes_barra_navegacion, categoria_arena_barra_navegacion, categoria_accesorios_barra_navegacion)


        /* Boton para abrir y cerrar las categorias de la barra de navegacion */

        const contenedor_boton_abrir_cerrar_categorias_barra_navegacion = document.createElement("div")
        contenedor_boton_abrir_cerrar_categorias_barra_navegacion.id = "contenedor_boton_abrir_cerrar_categorias_barra_navegacion"

        const boton_abrir_cerrar_categorias_barra_navegacion = document.createElement("img")
        boton_abrir_cerrar_categorias_barra_navegacion.id = "boton_abrir_cerrar_categorias_barra_navegacion"
        boton_abrir_cerrar_categorias_barra_navegacion.src = "../../Imagenes/menu_hamburguesa.png"

        contenedor_boton_abrir_cerrar_categorias_barra_navegacion.append(boton_abrir_cerrar_categorias_barra_navegacion)


        /* Boton iniciar sesion */

        const contenedor_boton_iniciar_sesion = document.createElement("div")
        contenedor_boton_iniciar_sesion.id = "contenedor_boton_iniciar_sesion"

        const boton_iniciar_sesion = document.createElement("div")
        boton_iniciar_sesion.id = "boton_iniciar_sesion"
        boton_iniciar_sesion.textContent = "Iniciar sesion"

        contenedor_boton_iniciar_sesion.append(boton_iniciar_sesion)


        /* Carrito de compras */

        const contenedor_carrito_compras = document.createElement("div")
        contenedor_carrito_compras.id = "contenedor_carrito_compras"

        const carrito_compras = document.createElement("img")
        carrito_compras.id = "carrito_compras"
        carrito_compras.src = "../../Imagenes/carrito_compras.png"

        contenedor_carrito_compras.append(carrito_compras)


        /* Foto de perfil del usuario */

        const contenedor_foto_perfil_usuario = document.createElement("div")
        contenedor_foto_perfil_usuario.id = "contenedor_foto_perfil_usuario"

        const foto_perfil_usuario = document.createElement("img")
        foto_perfil_usuario.id = "foto_perfil_usuario"
        foto_perfil_usuario.src = "../../Imagenes/foto_perfil_usuario.png"

        contenedor_foto_perfil_usuario.append(foto_perfil_usuario)


        /* Insertar todos los elementos */

        barra_navegacion.append(contenedor_logo_barra_navegacion, barra_busqueda, contenedor_boton_abrir_barra_busqueda, contenedor_boton_cerrar_barra_busqueda, contenedor_categorias_barra_navegacion, contenedor_boton_abrir_cerrar_categorias_barra_navegacion, contenedor_boton_iniciar_sesion, contenedor_carrito_compras, contenedor_foto_perfil_usuario)


        const diseño_escritorio = () => {
            contenedor_logo_barra_navegacion.id = "contenedor_logo_barra_navegacion"
            barra_busqueda.id = "barra_busqueda"

            contenedor_boton_abrir_barra_busqueda.id = "contenedor_boton_abrir_barra_busqueda_desactivado"
            contenedor_boton_cerrar_barra_busqueda.id = "contenedor_boton_cerrar_barra_busqueda_desactivado"

            contenedor_categorias_barra_navegacion.id = "contenedor_categorias_barra_navegacion"

            contenedor_boton_abrir_cerrar_categorias_barra_navegacion.id = "contenedor_boton_abrir_cerrar_categorias_barra_navegacion_desactivado"

            contenedor_boton_iniciar_sesion.id = "contenedor_boton_iniciar_sesion"

            contenedor_carrito_compras.id = "contenedor_carrito_compras_desactivado"
            contenedor_foto_perfil_usuario.id = "contenedor_foto_perfil_usuario_desactivado"
        }

        const diseño_tablet = () => {
            contenedor_logo_barra_navegacion.id = "contenedor_logo_barra_navegacion"
            barra_busqueda.id = "barra_busqueda"

            contenedor_boton_abrir_barra_busqueda.id = "contenedor_boton_abrir_barra_busqueda_desactivado"
            contenedor_boton_cerrar_barra_busqueda.id = "contenedor_boton_cerrar_barra_busqueda_desactivado"

            contenedor_categorias_barra_navegacion.id = "contenedor_categorias_barra_navegacion"

            contenedor_boton_abrir_cerrar_categorias_barra_navegacion.id = "contenedor_boton_abrir_cerrar_categorias_barra_navegacion_desactivado"
                
            contenedor_boton_iniciar_sesion.id = "contenedor_boton_iniciar_sesion"

            contenedor_carrito_compras.id = "contenedor_carrito_compras_desactivado"
            contenedor_foto_perfil_usuario.id = "contenedor_foto_perfil_usuario_desactivado"
        }


        const diseño_movil = () => {
            contenedor_logo_barra_navegacion.id = "contenedor_logo_barra_navegacion"

            barra_busqueda.id = "barra_busqueda_desactivado"

            contenedor_boton_abrir_barra_busqueda.id = "contenedor_boton_abrir_barra_busqueda"
            contenedor_boton_abrir_barra_busqueda.addEventListener("click", abrir_barra_busqueda)

            contenedor_boton_cerrar_barra_busqueda.id = "contenedor_boton_cerrar_barra_busqueda_desactivado"

            contenedor_categorias_barra_navegacion.id = "contenedor_categorias_barra_navegacion"
            cerrar_categorias_barra_navegacion()

            contenedor_boton_abrir_cerrar_categorias_barra_navegacion.id = "contenedor_boton_abrir_cerrar_categorias_barra_navegacion"
            contenedor_boton_abrir_cerrar_categorias_barra_navegacion.addEventListener("click", abrir_cerrar_categorias_barra_navegacion)

            contenedor_boton_iniciar_sesion.id = "contenedor_boton_iniciar_sesion"

            contenedor_carrito_compras.id = "contenedor_carrito_compras_desactivado"
            contenedor_foto_perfil_usuario.id = "contenedor_foto_perfil_usuario_desactivado"
        }


        /* Apertura y cierre de la barra de busqueda en el diseño para moviles */

        const abrir_barra_busqueda = () => {
                contenedor_logo_barra_navegacion.id = "contenedor_logo_barra_navegacion_desactivado"

                barra_busqueda.id = "barra_busqueda"

                contenedor_boton_abrir_barra_busqueda.id = "contenedor_boton_abrir_barra_busqueda_desactivado"

                contenedor_boton_cerrar_barra_busqueda.id = "contenedor_boton_cerrar_barra_busqueda"
                contenedor_boton_cerrar_barra_busqueda.addEventListener("click", cerrar_barra_busqueda)

                contenedor_categorias_barra_navegacion.id = "contenedor_categorias_barra_navegacion_desactivado"
                contenedor_boton_abrir_cerrar_categorias_barra_navegacion.id = "contenedor_boton_abrir_cerrar_categorias_barra_navegacion_desactivado"
                contenedor_boton_iniciar_sesion.id = "contenedor_boton_iniciar_sesion_desactivado"
                contenedor_carrito_compras.id = "contenedor_carrito_compras_desactivado"
                contenedor_foto_perfil_usuario.id = "contenedor_foto_perfil_usuario_desactivado"
        }

        const cerrar_barra_busqueda = () => {
            diseño_movil()
        }


        /* Apertura y cierre de las categorias de la barra de navegacion en el diseño para moviles */

        const abrir_categorias_barra_navegacion = () => {
            contenedor_categorias_barra_navegacion.classList.add("contenedor_categorias_barra_navegacion_abrir")
            contenedor_categorias_barra_navegacion.classList.remove("contenedor_categorias_barra_navegacion_cerrar")
            contenedor_categorias_barra_navegacion.classList.replace("cerrado", "abierto")
        }

        const cerrar_categorias_barra_navegacion = () => {
            contenedor_categorias_barra_navegacion.classList.add("contenedor_categorias_barra_navegacion_cerrar")
            contenedor_categorias_barra_navegacion.classList.remove("contenedor_categorias_barra_navegacion_abrir")
            contenedor_categorias_barra_navegacion.classList.replace("abierto", "cerrado")
        }

        const abrir_cerrar_categorias_barra_navegacion = () => {
            if (contenedor_categorias_barra_navegacion.classList.contains("cerrado")) {
                abrir_categorias_barra_navegacion()
            }
            else if (contenedor_categorias_barra_navegacion.classList.contains("abierto")) {
                cerrar_categorias_barra_navegacion()
            }
        }


        /* Diseño responsivo */

        const diseño_responsivo = () => {
            if (window.matchMedia("(min-width: 1000px)").matches == true) {
                diseño_escritorio()
            }

            else if (window.matchMedia("(min-width: 500px)").matches == true) {
                diseño_tablet()
            }

            else {
                diseño_movil()
            }
        }

        diseño_responsivo()

        window.addEventListener("resize", diseño_responsivo)


        return barra_navegacion
    }
}

export default Barra_navegacion