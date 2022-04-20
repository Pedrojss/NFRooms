const { Db } = require("mongodb");

function getHello() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/",
        success: function (data) {
            $("#resGetHello").html(data);
        },
        error: function (res) {
            alert("ERROR: " + res.statusText);
        }
    });
}

function getReserva() {
    if(($("#id-reserva").val() == "")){
        alert("Debe introducir un id valido");
        return;
    }
    var myUrl = "http://localhost:8080/reservas/" + $("#id-reserva").val();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function (data) {
            $("#resultado").html("");
            var new_tr = "<tr><td>Nombre<td>" + data[0].Nombre + "</td></tr><tr><td>Apellidos<td> " + data[0].Apellidos + "</td></tr><tr><td>Email<td> " + data[0].email + "</td></tr><tr><td>DNI<td>" 
                        + data[0].dni + "</td></tr><tr><td>Telefono<td>" + data[0].telefono + "</td></tr><tr><td>Sala<td>" + data[0].sala + "</td></tr><tr><td>Personas<td>" + data[0].npersonas + "</td></tr><tr><td>Fecha<td>" + data[0].fecha 
                        + "</td></tr><tr><td>Hora inicio<td>" + data[0].horaini + "</td></tr><tr><td>Hora fin<td>" + data[0].horafin + "</td></tr>";
            $("#resultado").append(new_tr);
            $("#boton-eliminar").attr('style','display:inline-block');
            $("#boton-eliminartodo").attr('style','display:none');
            $("#todo").attr('style','display:grid; padding-bottom:10px');
        },
        error: function (res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function postReserva() {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/reservas/",
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "Nombre": $("#nombre-reserva").val(),
            "Apellidos": $("#apellidos-reserva").val(),
            "email": $("#email-reserva").val(),
            "dni": $("#dni-reserva").val(),
            "telefono": $("#telefono-reserva").val(),
            "sala": $("#selector-sala").val(),
            "npersonas": $("#persona-reserva").val(),
            "fecha": $("#selector-fecha").val(),
            "horaini": $("#selector-horai").val(),
            "horafin": $("#selector-horaf").val()
        }),
        success: function (data) {
            $("#main").html(data);
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        }
    });
}

function getAllReservas() {
    var myUrl = "http://localhost:8080/reservas/";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function (data) {
            $("#resultado").html("");
            var header="<tr><th>ID<th>Nombre<th>Apellidos<th>Email<th>DNI<th>Telefono<th>Sala<th>Personas<th>Fecha<th>Hora inicio<th>Hora fin</tr>"
            $("#resultado").append(header);
            for (var i = 0; i < data.length; i++) {
                var new_tr = "<tr><td>" + data[i]._id + 
                            "</td><td>" + data[i].Nombre + 
                            "</td><td>" + data[i].Apellidos + 
                            "</td><td>" + data[i].email + 
                            "</td><td>" + data[i].dni + 
                            "</td><td>" + data[i].telefono + 
                            "</td><td>" + data[i].sala + 
                            "</td><td>" + data[i].npersonas + 
                            "</td><td>" + data[i].fecha + 
                            "</td><td>" + data[i].horaini + 
                            "</td><td>" + data[i].horafin + 
                            "</td></tr>";
                $("#resultado").append(new_tr);
                $("#boton-eliminartodo").attr('style','display:inline-block');
                $("#todo").attr('style','display:none');
                $("#boton-eliminar").attr('style','display:none');
            }
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        }
    });
}



function deleteReserva() {
    if(($("#id-reserva").val() == "")){
        alert("Debe introducir un id valido");
        return;
    }
    var myUrl = "http://localhost:8080/reservas/" + ($("#id-reserva").val());
    $.ajax({
        type: "DELETE",
        url: myUrl,
        contentType: "application/json",
        dataType: "text",
        success: function (data) {
            alert("Se ha eliminado correctamente tu reserva")
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        }
    });
}

function deleteAllReservas() {
    var myUrl = "http://localhost:8080/reservas/";
    $.ajax({
        type: "DELETE",
        url: myUrl,
        contentType: "application/json",
        dataType: "text",
        success: function (data) {
            alert("Se han eliminado todas las reservas correctamente")
        },
        error: function (res) {
            alert("ERROR " + res.statusText);
        }
    });
}
