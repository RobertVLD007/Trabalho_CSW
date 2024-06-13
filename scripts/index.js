const adm = {
    usuario: "Administrador",
    senha: "adm123"
}
const user = {
    usuario: "Donatario01",
    senha: "dona123"
}


// ENTER LOGIN PAGE
document.getElementById("btn-login").addEventListener("click", () => {
    (window.href == "index.html") ? window.reload() : window.open("./index.html", "_self");
});

// let form = document.querySelector("form-section");
// form.getAttribute("action", "javascript:void(0)");

// LOGIN FUNCTION
let login = document.getElementById("btn-submit");
login.addEventListener("click", function() {

    let user_entry = document.getElementById("email").value;
    let pass_entry = document.getElementById("senha").value;
    switch(true) {
        case user_entry == adm.usuario && pass_entry == adm.senha:
            window.open("./pages/admin/dashboard.html", "self");
            break;
        case user_entry == user.usuario && pass_entry == user.senha:
            window.open("./pages/instituicao/dashboard.html", "_self");
            break;
        case user_entry === "" || pass_entry === "":
            alert("Preencha todos os campos!");
            break;
        default:
            alert("Usuário ou senha inválidos!");
            break;
    }
});

// TROCAR CONTEUDO DA PÁGINA
link = document.querySelectorAll(".link");
link.forEach((item) => {
    item.addEventListener("click", () => {
        let page = item.getAttribute("data-page");
        window.open(page, "_self");
    });
});