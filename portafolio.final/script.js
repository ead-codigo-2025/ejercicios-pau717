// Interacción menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Efecto de aparición al hacer scroll
const elementos = document.querySelectorAll('.fade-in');

function mostrarAlDesplazar() {
  const triggerBottom = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

