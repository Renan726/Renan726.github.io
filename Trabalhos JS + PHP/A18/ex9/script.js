var imagens = document.querySelectorAll('#carrossel img');
var btnAnterior = document.getElementById('anterior');
var btnProximo = document.getElementById('proximo');

var indiceAtual = 0;

function mudarImagem(direcao) {
    imagens[indiceAtual].style.display = 'none';

    indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;

    imagens[indiceAtual].style.display = 'block';
}

mudarImagem(0);
