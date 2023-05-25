var pedido1 = document.getElementById("15516");
var btn1 = document.getElementById("btn15516");
var pedido2 = document.getElementById("15517");
var btn2 = document.getElementById("btn15517");
var pedido3 = document.getElementById("15518");
var btn3 = document.getElementById("btn15518");
var pagamento = document.getElementById("pagamento");
var dadosEvento = document.getElementById("dadosEvento");

dadosEvento.addEventListener("click", () => { 
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/dadosEvento/dadosevento.html")
        return;
    }

    window.location.assign("/customer-prototype/dadosEvento/dadosevento.html")
})

btn1.addEventListener("click", () => {
    pedido1.remove();
})
btn2.addEventListener("click", () => {
    pedido2.remove();
})
btn3.addEventListener("click", () => {
    pedido3.remove();
})

pagamento.addEventListener("click", () => { 
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/paginaPagamento/paginapagamento.html");
        return;
    }

    window.location.assign("/customer-prototype/paginaPagamento/paginapagamento.html");
})
