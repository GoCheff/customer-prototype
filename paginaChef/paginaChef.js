var pratos = document.querySelectorAll(".imgprato");
var pedidos = document.getElementById("listapedidos");
var btnPedido = document.getElementById("btnpedidos");

var listaPedidos = []

pratos.forEach((prato) => {
    prato.addEventListener("click", () => {

        if(listaPedidos.length == 0) {
            console.log('certo')
            var btn = document.createElement("input");
            btn.setAttribute('type', 'button');
            btn.setAttribute('value', 'Confirmar Pedido');
            btn.setAttribute('id', 'btnpedido');

            btnPedido.appendChild(btn);
        }
        

        var value = prato.dataset.value;
        var p = document.createElement("h1");
        p.innerText = `${value}`;
        pedidos.appendChild(p);
        listaPedidos.push(value)
    })

})