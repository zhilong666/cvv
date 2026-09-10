// Interaction JS v1.1 (docs copy)
// Same as root js/interaction.js to ensure docs/ pages load the same logic.

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => navList.classList.toggle('open'));
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navList.classList.toggle('open');
      }
    });
  }

  const selector = '.reveal, .timeline-item';
  const reveals = document.querySelectorAll(selector);

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.classList.contains('timeline-item')) {
            const items = Array.from(document.querySelectorAll('.timeline-item'));
            const idx = items.indexOf(el);
            const delay = Math.min(6, idx) * 80;
            el.style.transitionDelay = delay + 'ms';
          }
          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('visible'));
  }

  window.__revealAll = () => document.querySelectorAll(selector).forEach((el, i) => setTimeout(()=> el.classList.add('visible'), i*60));
});
