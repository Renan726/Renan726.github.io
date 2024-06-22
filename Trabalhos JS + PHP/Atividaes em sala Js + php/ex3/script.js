function calcularPorcentagem() {
    // Obter o valor do input
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular 15% do valor
    var porcentagem = valor * 0.15;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `15% de ${valor} é ${porcentagem.toFixed(2)}`;
}
