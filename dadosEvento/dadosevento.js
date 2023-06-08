var btnBuscar = document.getElementById("btnbuscar");
var btnPedidos = document.getElementById("btnpedidos");


btnPedidos.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/paginaPedidos/paginapedidos.html")
        return;
    }

    window.location.assign("/customer-prototype/paginaPedidos/paginapedidos.html")
})

btnBuscar.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/paginaPratos/paginapratos.html");
        return;
    }

    window.location.assign("/customer-prototype/paginaPratos/paginapratos.html");
})