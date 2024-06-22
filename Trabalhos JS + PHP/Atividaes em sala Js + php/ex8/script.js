function calcularDesconto() {
    // Obter o valor do input
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular 9% de desconto
    var desconto = valor * 0.09;
    var valorComDesconto = valor - desconto;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `O valor com 9% de desconto é ${valorComDesconto.toFixed(2)}`;
}
