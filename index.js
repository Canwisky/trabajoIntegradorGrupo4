document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("miButton");
    /*
    button.addEventListener("click", () => {
        alert("Hola, soy una funcion anonima ejecutandose!");
    }); 
    button.addEventListener("click", saludar);
    */
    button.addEventListener("click", () => {
        var contenedor = document.getElementById("contenedorEjercicio");
        /*
        var elementoActivo = contenedor.getElementsByClassName("activo");
        console.log(elementoActivo.item(0));
        */
        
        var elementoActivo = contenedor.querySelector(".activo");
        
        var elementoSiguiente = contenedor.querySelector(".activo + .desactivo");
        if(elementoSiguiente === null){
            elementoSiguiente = contenedor.querySelector(".desactivo:first-of-type");
        }
        
        elementoActivo.classList.remove("activo");
        elementoActivo.classList.add("desactivo");

        elementoSiguiente.classList.remove("desactivo");
        elementoSiguiente.classList.add("activo");   
        
        
        /* UTILIZACION DE SPLIT */
        /*
        var idElementoActivo = elementoActivo.id; //elemento-1 => elemento-2
        var descomponerID = idElementoActivo.split("-");
        var numeroElemento = Number(descomponerID[1]) + 1;
        var elementoSiguiente = contenedor.querySelector("#elemento-"+numeroElemento);
        console.log(elementoSiguiente);
        */
    });

});