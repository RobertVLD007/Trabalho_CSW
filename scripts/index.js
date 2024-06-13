const adm = {
    usuario: "Administrador",
    senha: "adm123"
}
const user = {
    usuario: "Donatario01",
    senha: "dona123"
}

function validar(User_entry, Code_entry) {
    User_entry = document.getElementById("email").value;
    Code_entry = document.getElementById("senha").value;
 
    switch (true) {
        case User_entry === adm.usuario && Code_entry === adm.senha:
            window.location.replace("./paginas/fortes/dashboard.html");
            break;
        case User_entry === user.usuario && Code_entry === user.senha:
            window.location.replace("./paginas/donatario/dashboard.html");
            break;
        case User_entry == "" || Code_entry == "":
            alert("Ainda há opções para preencher");
            break;
        case User_entry != adm.usuario || Code_entry != adm.senha || 
            User_entry != user.usuario || Code_entry != user.senha:
            alert("Entrada incorreta");
            window.location.reload();
            break;
    }
}

