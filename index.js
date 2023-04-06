var btnBuscar = document.getElementById("btnbuscar");
var btnRegistro = document.getElementById("btnregistro");

btnBuscar.addEventListener("click", () => {
    window.location.assign("/dadosEvento/dadosevento.html");
})

btnRegistro.addEventListener("click", () => {
    window.location.assign("/formulario_registro/index.html");
})