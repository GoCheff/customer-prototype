var btnEntrar = document.getElementById("btnentrar");
var btnContinue = document.getElementById("btncontinue");

btnEntrar.addEventListener("click", () => {
    window.location.assign("../index.html");
})

btnContinue.addEventListener("click", () => {

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    console.log(firstName, lastName, email, number, password, confirmPassword);

    const currentUrl = window.location.href;

    if (!currentUrl.includes("gocheff.github.io")) {
        window.location.assign("/dadosEvento/dadosevento.html");
        return;
    } 

    window.location.assign("/customer-prototype/dadosEvento/dadosevento.html");
})
