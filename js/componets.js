function loadComponent(elementId, filePath) {
// requisição para buscar o arquivo especificado
fetch(filePath)
//  Converte a resposta para texto
.then(response => response.text())
// Pega o elemento pelo ID e injeta o texto HTML dentro dele
.then(htmlData => {
document.getElementById(elementId).innerHTML = htmlData;
})
// Caso ocorra algum erro, exibe no console
.catch(error => console.error('Erro ao carregar componente:', error));
}

// Carrega o cabeçalho e o rodapé quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
loadComponent('header', 'js/header.html');
loadComponent('footer', 'js/footer.html');
});