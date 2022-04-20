let salas=[
    {
        'id': 1,
        'nombre': "Sala Kyoto",
        'capacidad': 50,
        'precio': 1200,
        'imagen': "imagenes/salas/2614e580a7643d072ccbcec798e19fa3.jpg",
        'descripcion': "La sala Kyoto, es una sala insonorizada dedicada a espacios para baile y yoga.<br>\n" 
        + 
        "La sala está equipada con un equipo de sonido, luces y una gran ventana con vistas a los jardines. Está disponible para clases y talleres.\n"
    },
    {
        'id': 2,
        'nombre': "Sala Miami",
        'capacidad': 2,
        'precio': 40,
        'imagen': "imagenes/salas/51yquyPnEAL._AC_SY350_.jpg",
        'descripcion': "La sala Miami es una sala de estilo moderno con un par de elegantes mesas de trabajo y cómodas sillas de oficina que, junto con las lámparas de lectura, crean un ambiente relajado y tranquilo."
    },
    {
        'id': 3,
        'nombre': "Sala Otawa",
        'capacidad': 1,
        'precio': 25,
        'imagen': "imagenes/salas/1-85687.jpeg",
        'descripcion': "La sala Otawa es una sala dedicada al trabajo individual, es ideal para estudiantes que necesitan un lugar tranquilo para estudiar o para aquellos que necesitan un lugar para trabajar en silencio." +
            "La sala se encuentra en el segundo piso."
    },
    {
        'id': 4,
        'nombre': "Sala Berlin",
        'capacidad': 5,
        'precio': 500,
        'imagen': "imagenes/salas/DSC_0049-350x350.jpg",
        'descripcion': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
function cargarSalas(){
    salas.forEach(cargarSala);
}

function cargarSala(sala){
    $('#selector-sala').append(`<option value="${sala.id}">${sala.nombre}</option>`);
}
function buscarSala(id){
    return salas.find(sala => sala.id === id);
}

function salaSeleccionada(objetoSeleccionado){
    if(objetoSeleccionado.value !== ""){

    var idSala = parseInt(objetoSeleccionado.value);

   
        $("#informacion-sala").show();
        
        sala = buscarSala(idSala);

        if (sala) {
            $("#titulo-sala").html(sala.nombre);
            $("#descripcion-sala").html(sala.descripcion);
            $("#img-sala").attr("src",sala.imagen);
            $("#precio-sala").html("Precio: " + sala.precio);
            $("#tam-sala").html("Capacidad: " + sala.capacidad);
        }
    }
    else
        $("#informacion-sala").hide();
}

function valida_nombre(nombre){
	let valido = true;
    if(nombre.length < 3){
        valido = false
    }else{
        for(let i = 0; i < nombre.length; i++){
            if($.isNumeric(nombre[i])){
                valido = false;
            }
        }
    }
	
	return valido;
}

function valida_apellidos(apellidos){
	let valido = true;
    if(apellidos.length < 5){
        valido = false
    }else{
        for(let i = 0; i < apellidos.length; i++){
            if($.isNumeric(apellidos[i])){
                valido = false;
            }
        }
    }
	
	return valido;
}

function valida_email(email){
	let valido = true;
	if(email.split("@").length != 2){
		valido = false;
    }
	else{
        if(email.split("@")[0].split(" ").length > 1){
			valido = false;
		} 
        else{
            if(email.split("@")[1].split(".").length != 2){
                valido = false;
            }
            else{
                if(email.split("@")[1].split(".")[0].split(" ").length > 1){
                    valido = false;
                }
                if(email.split("@")[1].split(".")[1].split(" ").length > 1){
                    valido = false;
                }
            }
        }
    }

	return valido;
}

function valida_DNI(DNI){
	let valido = true;
	let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
	if(DNI.length != 9){
			valido = false;
	}
	if(valido){
		for(let i = 0; i < 8; i++){
			if(!$.isNumeric(DNI[i])){
				valido = false;
			}
		}
	}
	if(valido){
		if($.isNumeric(DNI[8])){
			valido = false;
		}
	}
	if(valido){
		let numeros = DNI.substr(0, DNI.length - 1);
		let resto_division = parseInt(numeros % 23);
		if(DNI[8].toUpperCase() != letras[resto_division]){
			valido = false;
		}
	}
	return valido;
}

function valida_telefono(telefono){
	let valido = true;
    if(telefono.length != 9){
        valido = false
    }else{
        for(let i = 0; i < 9; i++){
            if(!($.isNumeric(telefono[i]))){
                valido = false;
            }
        }
    }
	
	return valido;
}

function valida_selector(indice){
	let valido = true;

    if( indice==null || indice==-1){
        valido = false;
    }
	return valido;
}

function valida_numero_personas(personas){
    return personas >=1 && personas <= $("#tam-sala");
}

function valida_fecha(fecha){
	let valido = true;
    let hoy = new Date();
    if(Date.parse(fecha) <= hoy || fecha==""){
        valido = false;
    }
	return valido;
}

function validacion_fechas(fecha1, fecha2) {
    let fecha1int = parseInt(fecha1[0]) * 10 + parseInt(fecha1[1]);
    let fecha2int = parseInt(fecha2[0]) * 10 + parseInt(fecha2[1]);
    return fecha1int < fecha2int;
}

function validacion(){
    let valido = true;
    let cadena = "Error: ";
    if(!valida_nombre($("#nombre-reserva").val())){
        valido = false;
        cadena += "<br>○ Nombre ha de ser mayor de 2 caracteres";
    }

    if(!valida_apellidos($("#apellidos-reserva").val())){
        valido = false;
        cadena += "<br>○ Apellidos tiene que ser mayor de 2 caracteres";
    }

    if(!valida_email($("#email-reserva").val())){
        valido = false;
        cadena += "<br>○ Introduzca una dirección de correo válida.";
    }

    if(!valida_DNI($("#dni-reserva").val())){
        valido = false;
        cadena += "<br>○ El DNI introducido es incorrecto.";
    }

    if(!valida_telefono($("#telefono-reserva").val())){
        cadena += "<br>○ El teléfono introducido es incorrecto.";
        valido = false;
    }

    if(!valida_numero_personas($("#personas-reserva",).val())){
        valido = false;
        cadena += "<br>○ El número de personas ha de ser mayor que uno y menor que la capacidad de la sala.";
    }

    if(!valida_fecha($("#fecha-reserva").val())){
        cadena += "<br>Elija una fecha posterior a la de hoy.";
        valido = false;
    }

    if(!validacion_fechas($("#selector-horai").val(), $("#selector-horaf").val())) {
        cadena += "<br>○ La hora de finalización debe ser posterior a la de inicio.";
        valido = false;
    }
    
    if(!valida_selector($("#selector-sala").val())){
        cadena += "<br>○ Debe elegir una de las salas";
        valido = false;
    }
    console.log(valido);
    if(valido){
        window.alert("Los datos son correctos");
    }
    else
        $("#errores").html(cadena);
    return valido;
}
