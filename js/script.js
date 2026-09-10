// 简单导航切换与 reveal 动画（增强版）
// 现在同时监听 .reveal 与 .timeline-item，timeline 项目会有小延迟的入场动画
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle (移动端)
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => navList.classList.toggle('open'));
  }

  // reveal on scroll: observe both .reveal and .timeline-item
  const selector = '.reveal, .timeline-item';
  const reveals = document.querySelectorAll(selector);

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // stagger timeline items slightly based on their index for nicer effect
          if (el.classList.contains('timeline-item')) {
            const items = Array.from(document.querySelectorAll('.timeline-item'));
            const idx = items.indexOf(el);
            const delay = Math.min(6, idx) * 80; // max small delay
            el.style.transitionDelay = delay + 'ms';
          }

          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(r => io.observe(r));
  } else {
    // fallback: just show everything
    reveals.forEach(r => r.classList.add('visible'));
  }

  // Accessibility: allow Space/Enter to toggle nav on small screens when focused on the toggle
  if (toggle) {
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navList.classList.toggle('open');
      }
    });
  }

});
