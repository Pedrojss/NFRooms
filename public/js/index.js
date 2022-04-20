function cargarInformacion(titulo, cuerpo){
    let popup = document.getElementById("popup");

    let obj_titulo = document.getElementById("título");
    let obj_cuerpo = document.getElementById("cuerpo");

    obj_titulo.innerHTML = titulo;
    obj_cuerpo.innerHTML = cuerpo;

    popup.setAttribute("style","display: flex;");
}

function cerrarPopUp(){
    let popup = document.getElementById("popup");
    popup.setAttribute("style", "display: none");
}
