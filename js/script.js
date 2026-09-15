// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Fecha o menu mobile ao clicar em um link (evita menu aberto após navegar)
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// Destaca o link do menu correspondente à seção visível
const sections = document.querySelectorAll('section[id], header[id]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((section) => observer.observe(section));
