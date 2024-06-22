function calcularMedia(){
    var valor1 = parseFloat(document.getElementById('val1').value);
    var valor1 = parseFloat(document.getElementById('val2').value);
    var valor1 = parseFloat(document.getElementById('val3').value);
}

var media = (val1 + val2 + val3) / 3;

document.getElementById('resultado').innerHTML = `media: ${media.toFixed(2)}`;

