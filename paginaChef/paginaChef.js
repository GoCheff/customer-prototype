var pratos = document.querySelectorAll(".imgprato");
var pedidos = document.getElementById("listapedidos");
var btnPedido = document.getElementById("btnpedidos");
var btn = document.createElement("input");


var listaPedidos = []

pratos.forEach((prato) => {
    prato.addEventListener("click", () => {

        if(listaPedidos.length == 0) {
            console.log('certo')
            btn.setAttribute('type', 'button');
            btn.setAttribute('value', 'Confirmar Pedido');
            btn.setAttribute('id', 'btnpedido');

            btnPedido.appendChild(btn);
        }
        

        var value = prato.dataset.value;
        var p = document.createElement("h3");
        p.className = "pSelecionado";
        p.innerText = `${value}`;
        pedidos.appendChild(p);
        listaPedidos.push(value);
    })

})

btn.addEventListener("click", () => {
    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/paginaPedidos/paginapedidos.html");
        return;
    }

    window.location.assign("/customer-prototype/paginaPedidos/paginapedidos.html");
})

