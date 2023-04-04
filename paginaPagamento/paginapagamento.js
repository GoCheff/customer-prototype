var btnpagamento = document.getElementById("btnpagamento");

btnpagamento.addEventListener("click", () => {

    alert("Pagamento confirmado!");

    window.location.assign("../paginaPedidos/paginapedidos.html");
})