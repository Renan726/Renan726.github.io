var imagens = [
    'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUb9GsXFdfXtBQg6Kck06SvcHzq_wlqMzlA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3vjKEAH86rVI_tNlTKonflsWlfsPMDO_PQ&s'
];
var indiceImagem = 0;

function alterarImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length;
    document.getElementById('imagem').src = imagens[indiceImagem];
}
