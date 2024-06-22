function calcularVolume() {
    // Obter os valores dos inputs
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular o volume
    var volume = comprimento * largura * altura;

    // Exibir o resultado na página
    document.getElementById('resultado').innerHTML = `O volume da caixa retangular é ${volume.toFixed(2)} cm³`;
}
