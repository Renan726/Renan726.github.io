function calcularPorcentagens() {
    // Obter o valor do input
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular 5% e 50% do valor
    var porcentagem5 = valor * 0.05;
    var porcentagem50 = valor * 0.50;

    // Exibir os resultados na página
    document.getElementById('resultado5').innerHTML = `5% de ${valor} é ${porcentagem5.toFixed(2)}`;
    document.getElementById('resultado50').innerHTML = `50% de ${valor} é ${porcentagem50.toFixed(2)}`;
}
