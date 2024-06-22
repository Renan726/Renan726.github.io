function converterVelocidade() {
    // Obter o valor da velocidade em m/s
    var velocidadeMs = parseFloat(document.getElementById('velocidade').value);

    // Converter a velocidade para km/h
    var velocidadeKmh = velocidadeMs * 3.6;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `A velocidade é ${velocidadeKmh.toFixed(2)} km/h`;
}
