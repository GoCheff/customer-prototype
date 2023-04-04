var btnBuscar = document.getElementById("btnbuscar");
var pedidos = document.getElementById("pedidos");


pedidos.addEventListener("click", () => {
    window.location.assign("../paginaPedidos/paginapedidos.html")
})
btnBuscar.addEventListener("click", () => {
    window.location.assign("../paginaPratos/paginapratos.html");
})