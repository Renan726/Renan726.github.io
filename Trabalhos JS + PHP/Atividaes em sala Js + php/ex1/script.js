function calcular() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Calcular a soma dos dois números
    var soma = num1 + num2;

    // Multiplicar o resultado pelo primeiro número
    var resultado = soma * num1;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
