// constante que armazena as páginas do site
const sitePages=[
  { name: "Home", url: "index.html" },
  { name: "Serviços", url: "pages/services.html" },
  { name: "Contato", url: "pages/contact.html" },
  { name: "about", url: "pages/about.html" }
];
// função que carrega o conteúdo da página selecionada
function loadPage(pageUrl) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(htmlData => {
      document.getElementById("content").innerHTML = htmlData;
    })
    .catch(error => console.error('Erro ao carregar página:', error));
}

// adiciona um evento de clique aos links do menu
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pageUrl = link.getAttribute('href');
      loadPage(pageUrl);
    });
  });
});