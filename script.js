    var botao = document.getElementById("divShare");
    botao.addEventListener("click",compartilhar);

function compartilhar() {
    botao.addEventListener("click",fechar);
    document.getElementById("divItemOculto").style.display = 'flex';
}

function fechar() {
    document.getElementById("divItemOculto").style.display = 'none';
}