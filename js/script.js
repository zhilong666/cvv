document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  if (data && data.profile) {
    $$('[data-profile]').forEach((element) => { const value = data.profile[element.dataset.profile]; if (value) element.textContent = value; });
    $$('[data-profile-link]').forEach((element) => { const value = data.profile[element.dataset.profileLink]; if (value) element.href = value; });
    const emailLink = $('[data-profile="email"]');
    if (emailLink) emailLink.href = `mailto:${data.profile.email}`;
  }

  const filters = $('.filters');
  const projectsGrid = $('.projects-grid');
  if (filters && projectsGrid && data) {
    let activeCategory = '全部';

    function renderFilters() {
      filters.innerHTML = data.categories.map((category) => `<button class="filter ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
      $$('.filter', filters).forEach((button) => button.addEventListener('click', () => {
        activeCategory = button.dataset.category;
        renderFilters();
        renderProjects();
      }));
    }

    function renderProjects() {
      const projects = activeCategory === '全部' ? data.projects : data.projects.filter((project) => project.category === activeCategory);
      projectsGrid.innerHTML = projects.map((project, index) => `<article class="project-card project-${project.color}" style="--delay:${index * 80}ms"><a href="${project.link}" class="project-visual" aria-label="查看 ${project.title}"><span class="project-index">0${index + 1}</span><span class="project-shape"></span><span class="project-arrow">↗</span></a><div class="project-info"><div><p class="project-category">${project.category} / ${project.year}</p><h3>${project.title}</h3></div><p>${project.description}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></div></article>`).join('');
    }

    renderFilters();
    renderProjects();
  }

  const experienceList = $('.experience-list');
  if (experienceList && data && data.experience) {
    experienceList.innerHTML = data.experience.map((item) => `<article class="experience-item"><p class="experience-period">${item.period}</p><div><h3>${item.role}</h3><p class="experience-company">${item.company}</p><p>${item.detail}</p></div></article>`).join('');
  }

  const skillsList = $('.skills-list');
  if (skillsList && data && data.skills) {
    skillsList.innerHTML = data.skills.map((skill, index) => `<span><b>0${index + 1}</b>${skill}</span>`).join('');
  }

  const toggle = $('.nav-toggle'); const nav = $('.nav-list');
  if (toggle && nav) {
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
    $$('.nav-list a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    $$('.reveal').forEach((element) => observer.observe(element));
  } else {
    $$('.reveal').forEach((element) => element.classList.add('visible'));
  }
});