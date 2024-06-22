function calcularParcelas() {
    // Obter o valor do produto
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular o valor total com acréscimo de 16%
    var valorTotal = valor * 1.16;

    // Calcular o valor de cada parcela (dividido em 10)
    var valorParcela = valorTotal / 10;

    // Exibir os resultados na página
    document.getElementById('resultado').innerHTML = `
        Valor total da compra: R$ ${valorTotal.toFixed(2)}<br>
        Valor de cada parcela (10x): R$ ${valorParcela.toFixed(2)}
    `;
}
