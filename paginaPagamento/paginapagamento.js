var btnpagamento = document.getElementById("btnpagamento");

btnpagamento.addEventListener("click", () => {

    alert("Pagamento confirmado!");

    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/paginaPedidos/paginapedidos.html");
        return;
    }

    window.location.assign("/customer-prototype/paginaPedidos/paginapedidos.html");
})