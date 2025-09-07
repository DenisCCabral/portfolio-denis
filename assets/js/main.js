document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // MENU MOBILE
  // =========================
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('.nav ul li');
  const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active de todos
    navLinks.forEach(l => l.classList.remove('active'));
    // Adiciona active ao link clicado
    link.classList.add('active');

    // Fecha menu mobile, se estiver aberto
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});
  
// Adiciona delay progressivo nos links
links.forEach((link, i) => {
  link.style.animationDelay = `${i * 0.1}s`;
});

  menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuToggle.classList.toggle('open'); // anima o botão
});


  // =========================
  // TYPED EFFECT HERO
  // =========================
  const words = ['Desenvolvedor Full-Stack', 'Cyber Security Enthusiast', 'Criador de Interfaces'];
  let idx = 0, char = 0, forward = true;
  const el = document.querySelector('.hero-content h2 .highlight');

  setInterval(() => {
    if(!el) return;
    const current = words[idx];
    if(forward){
      el.textContent = current.slice(0, char++);
      if(char > current.length){
        forward = false;
        setTimeout(()=>{}, 800);
      }
    } else {
      el.textContent = current.slice(0, char--);
      if(char === 0){
        forward = true;
        idx = (idx + 1) % words.length;
      }
    }
  }, 120);

  // =========================
  // SMOOTH SCROLL
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Fechar menu mobile ao clicar
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        nav.style.display = '';
      }
    });
  });

});
