function openDash() {
window.open("dashboard.html", "_self");
}
function openInsc() {
window.open("inscricoes.html", "_self");
}
function openEdi() {
window.open("editais.html", "_self");
}
function openProj() {
window.open("projetos.html", "_self");
}

let logout = document.getElementById("btn-logout");
logout.addEventListener("click", () => {
    window.open("../../index.html", "_self");
});
