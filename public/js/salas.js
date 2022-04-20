function cargarInformacion(nombre, cap, precio){
    let popup = document.getElementById("popup");

    let obj_nombre = document.getElementById("nombre");
    let obj_precio = document.getElementById("precio");
    let obj_capacidad = document.getElementById("capacidad");

    obj_nombre.innerHTML = nombre;
    obj_precio.innerHTML = precio+'€';
    obj_capacidad.innerHTML = cap;

    popup.setAttribute("style","display: flex;");
}

function cerrarPopUp(){
    let popup = document.getElementById("popup");
    popup.setAttribute("style", "display: none");
}

function reserva(id){
    window.location.assign("/reservar?id=" + id);
}