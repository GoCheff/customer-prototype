var chefs = document.querySelectorAll(".chef");
var pratos = document.querySelectorAll(".prato")


chefs.forEach((chefs) => {
    chefs.addEventListener("click", () => {
        window.location.assign("../paginaChef/paginachef.html")
    })
    
});

pratos.forEach((pratos) => {
    pratos.addEventListener("click", () => {
        window.location.assign("../paginaChef/paginachef.html")
    })
});
