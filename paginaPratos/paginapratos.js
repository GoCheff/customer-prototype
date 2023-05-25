var chefs = document.querySelectorAll(".chef");
var pratos = document.querySelectorAll(".prato")


chefs.forEach((chefs) => {
    chefs.addEventListener("click", () => {
        const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
            window.location.assign("/paginaChef/paginachef.html")
            return;
        }

        window.location.assign("/customer-prototype/paginaChef/paginachef.html")
    })
    
});

pratos.forEach((pratos) => {
    pratos.addEventListener("click", () => {
        const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
            window.location.assign("/paginaChef/paginachef.html")
            return;
        }

        window.location.assign("/customer-prototype/paginaChef/paginachef.html")
    })
});
