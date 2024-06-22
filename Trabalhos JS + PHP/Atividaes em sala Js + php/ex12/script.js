function calcularDesconto() {
    // Obter o valor do input
    var valor = parseFloat(document.getElementById('valor').value);

    // Calcular 27% de desconto
    var desconto = valor * 0.27;
    var valorComDesconto = valor - desconto;

    // Exibir os resultados na página
    document.getElementById('resultado').innerHTML = `
        Valor original: R$ ${valor.toFixed(2)}<br>
        Valor do desconto: R$ ${desconto.toFixed(2)}<br>
        Valor com desconto: R$ ${valorComDesconto.toFixed(2)}
    `;
}
