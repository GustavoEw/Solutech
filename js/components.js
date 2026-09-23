// Function para carregar um componente via fetch
function loadComponent(elementId, filePath) {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Erro ao carregar ${filePath}`);
      return response.text();
    })
    .then(htmlData => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = htmlData;
      }
    });
}

// Quando o DOM estiver pronto, carrega header e footer
document.addEventListener('DOMContentLoaded', () => {
  // Promise.all espera AMBOS o header e footer terminarem de carregar
  Promise.all([
    loadComponent('header', '/js/header.html'),
    loadComponent('footer', '/js/footer.html')
  ])
  .then(() => {
    // Dispara um aviso para todo o navegador avisando que os componentes estão prontos
    window.dispatchEvent(new CustomEvent('componentsLoaded'));
  })
  .catch(error => console.error('Erro ao carregar componentes:', error));
});