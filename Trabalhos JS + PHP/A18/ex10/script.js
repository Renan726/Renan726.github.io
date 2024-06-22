document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('elemento').addEventListener('click', function() {
        this.style.backgroundColor = 'green';
    });

    
    var cores = ['green', 'blue', 'red', 'yellow'];
    var indiceCorAtual = 0;

    
    document.getElementById('elemento2').addEventListener('click', function() {
        
        indiceCorAtual = (indiceCorAtual + 1) % cores.length;
        var cor = cores[indiceCorAtual];
        
        this.style.backgroundColor = cor;
    });
});
