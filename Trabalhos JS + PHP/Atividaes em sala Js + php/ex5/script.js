function calcularQuadrados() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Calcular o quadrado de cada número
    var quadrado1 = num1 * num1;
    var quadrado2 = num2 * num2;

    // Somar os quadrados
    var somaQuadrados = quadrado1 + quadrado2;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `A soma dos quadrados é ${somaQuadrados}`;
}
