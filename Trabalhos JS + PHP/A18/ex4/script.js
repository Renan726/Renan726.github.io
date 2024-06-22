function adicionarItem() {
    var itemText = document.getElementById('itemInput').value;
    if (itemText.trim() !== "") {
        var novoItem = document.createElement('li');
        novoItem.textContent = itemText;
        document.getElementById('listarItens').appendChild(novoItem);
        
        document.getElementById('itemInput').value = "";
        document.getElementById('itemInput').focus();
    }
}
