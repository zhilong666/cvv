document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('project-detail-root');
  const data = window.portfolioData;

  if (!root || !data) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project') || 'wild-tea';
  const detail = data.projectDetails.find((item) => item.slug === slug) || data.projectDetails[0];

  if (!detail) return;

  const statsHtml = detail.stats.map((stat) => `
    <div class="stat-item">
      <span>${stat.label}</span>
      <strong>${stat.value}</strong>
      <p>${stat.note}</p>
    </div>
  `).join('');

  const heroImage = detail.image || '666.jpg';
  const challengeImage = detail.challengeImage || detail.image || 'hhh.jpg';
  const bookImage = detail.bookImage || detail.image || '666.jpg';

  const galleryHtml = detail.gallery.map((item) => `
    <div class="gallery-card ${item.size === 'large' ? 'large' : ''}">
      <div class="mini-visual ${item.style}"></div>
      <div class="gallery-copy">
        <p>${item.title}</p>
        <h3>${item.subtitle}</h3>
      </div>
    </div>
  `).join('');

  root.innerHTML = `
    <div class="project-breadcrumb">
      <a href="index.html">Home</a>
      <span class="dot"></span>
      <span>${detail.breadcrumb}</span>
    </div>

    <section class="project-hero">
      <div>
        <p class="eyebrow">${detail.eyebrow}</p>
        <h1>Cyber Code</h1>
        <p class="project-lead">${detail.lead}</p>
      </div>
      <ul class="project-meta" aria-label="项目信息">
        <li>
          <span>Year</span>
          <strong>${detail.year}</strong>
        </li>
        <li>
          <span>Role</span>
          <strong>${detail.role}</strong>
        </li>
        <li>
          <span>Type</span>
          <strong>${detail.type}</strong>
        </li>
      </ul>
    </section>

    <section class="stat-grid reveal">
      ${statsHtml}
    </section>

    <section class="detail-visual reveal">
      <div class="visual-card" aria-label="项目视觉展示">
        <img class="detail-image" src="${heroImage}" alt="字体设计项目展示" />
      </div>
    </section>

    <section class="detail-section reveal">
      <div class="detail-header">
        <p class="section-heading">Project overview</p>
      </div>
      <div class="case-grid ${detail.overviewExtra ? '' : 'single'}">
        <div class="case-copy">
          <h2>${detail.overviewTitle}</h2>
          <p>${detail.overview}</p>
        </div>
        ${detail.overviewExtra ? `<div class="case-copy muted"><p>${detail.overviewExtra}</p></div>` : ''}
      </div>
    </section>

    <section class="detail-section reveal">
      <div class="detail-header">
        <p class="section-heading">Pattern Design</p>
      </div>
      <div class="challenge-image-area">
        <img src="${challengeImage}" alt="项目挑战展示" />
      </div>
    </section>

    <section class="detail-section reveal">
      <div class="detail-header">
        <p class="section-heading">Book Design</p>
      </div>
      <div class="book-image-area">
        <img src="${bookImage}" alt="Book Design 项目展示" />
      </div>
    </section>

    <section class="detail-section reveal">
      <div class="detail-header">
        <p class="section-heading">Selected works</p>
      </div>
      <div class="gallery-grid">
        ${galleryHtml}
      </div>
    </section>

    <section class="detail-section reveal">
      <div class="detail-header">
        <p class="section-heading">Result</p>
      </div>
      <div class="result-box">
        <p>${detail.result}</p>
      </div>
    </section>

    <section class="project-actions reveal">
      <a class="button button-dark" href="index.html#projects">返回作品列表 <span>↓</span></a>
      <a class="text-link" href="index.html#contact">联系合作 <span>↗</span></a>
    </section>
  `;

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('visible'));
  }
});
