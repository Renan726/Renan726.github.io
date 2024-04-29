function alterarTexto() {

    var elemento = document.getElementById('texto').innerHTML = 'Helo Word';

}

function changeBackgroundColor(selectElement) {
    var color = selectElement.value;
    var elementoConFondo = document.getElementById("Fundo");
    elementoConFondo.style.backgroundColor = color;
}

document.addEventListener("DOMContentLoaded", function() {
    var colorSelector = document.getElementById("Selecionarcor");
    colorSelector.addEventListener("change", function() {
        changeBackgroundColor(this);
    });
});
