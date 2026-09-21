function loadComponent(elementId, filePath) {
  // Requisição para buscar o arquivo especificado
  fetch(filePath)
    // Converte a resposta para texto
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro de rede ao carregar ${filePath}: status ${response.status}`);
      }
      return response.text();
    })
    // Pega o elemento pelo ID e injeta o HTML dentro dele
    .then(htmlData => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = htmlData;
      }
    })
    // Caso ocorra algum erro, exibe no console
    .catch(error => console.error('Erro ao carregar componente:', error));
}

// Carrega o cabeçalho e o rodapé quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  
  loadComponent('header', 'js/header.html');
  loadComponent('footer', 'js/footer.html');

  
});