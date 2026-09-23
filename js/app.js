const sitePages = [
  { name: "Home", url: "index.html" },
  { name: "Serviços", url: "pages/services.html" },
  { name: "Contato", url: "pages/contact.html" },
  { name: "about", url: "pages/about.html" }
];

function loadPage(pageUrl) {
  fetch(pageUrl)
    .then(response => {
      if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);
      return response.text();
    })
    .then(htmlData => {
      const content = document.getElementById("content");
      if (content) content.innerHTML = htmlData;
    })
    .catch(error => console.error('Erro ao carregar página:', error));
}

/**
 * DELEGAÇÃO DE EVENTOS:
 * Escutamos os cliques no escopo global (document). 
 * Não importa SE ou QUANDO o menu é injetado, o listener pega qualquer clique 
 * e verifica no runtime se o elemento clicado (ou o elemento pai) é um link dentro de <nav>.
 */
document.addEventListener('click', (event) => {
  // Procura pelo elemento <a> mais próximo caso o clique seja em um <span> ou <img> dentro do link
  const link = event.target.closest('nav a');

  if (link) {
    event.preventDefault();
    const pageUrl = link.getAttribute('href');
    loadPage(pageUrl);
  }
});