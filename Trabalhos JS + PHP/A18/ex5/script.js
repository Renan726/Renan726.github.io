function validarForm(){
    var nome = document.getElementById('campoNome').value;
    var email = document.getElementById('campoEmail').value;

    if (nome === '' || email === '') {
        alert ('Prencha todos os campos!');
        return false;
    }
    alert ('Concluido com sucesso!')
    return true;
}