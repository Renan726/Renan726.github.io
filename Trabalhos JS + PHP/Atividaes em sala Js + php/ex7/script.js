function calcularIMC() {
    // Obter os valores de altura e peso
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
}
