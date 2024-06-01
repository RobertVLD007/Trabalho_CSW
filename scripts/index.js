const adm = {
    usuario :   "Administrador",
    senha   :   "adm123"
}
const user = {
    usuario : "Donatario01",
    senha   : "dona123"
}

function validar() {
    User_entry = document.getElementById("email").value;
    Code_entry = document.getElementById("senha").value;

    if (User_entry == adm.usuario && Code_entry == adm.senha) {
        window.open("./paginas/landing.html").focus();

    } else if (User_entry == "" || Code_entry == "") {
        alert("Ainda há opções para preencher")
    } else if (User_entry != adm.usuario || Code_entry != adm.senha) {
        alert("Entrada incorreta");
        window.location.reload();
    }
}