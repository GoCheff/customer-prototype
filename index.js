var btnBuscar = document.getElementById("btnbuscar");
var btnRegistro = document.getElementById("btnregistro");

btnBuscar.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/dadosEvento/dadosevento.html");
        return;
    }

    window.location.assign("/customer-prototype/dadosEvento/dadosevento.html");
})

btnRegistro.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/formulario_registro/index.html");
        return;
    }

    window.location.assign("/customer-prototype/formulario_registro/index.html");
})