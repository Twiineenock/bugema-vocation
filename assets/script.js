// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.site-header');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Simple slider
(function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slidesWrap = slider.querySelector('.slides');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const dotsWrap = slider.querySelector('.dots');

  let index = 0;
  let autoplayMs = Number(slider.getAttribute('data-autoplay')) || 5000;
  let timerId = null;

  function update() {
    const offset = -index * slider.clientWidth;
    slidesWrap.style.transform = `translateX(${offset}px)`;
    dotsWrap.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-current', String(i === index)));
  }

  function go(to) {
    index = (to + slides.length) % slides.length;
    update();
  }

  function start() {
    stop();
    if (autoplayMs > 0) timerId = setInterval(() => go(index + 1), autoplayMs);
  }
  function stop() { if (timerId) clearInterval(timerId); timerId = null; }

  // Dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.addEventListener('click', () => { go(i); start(); });
    dotsWrap.appendChild(dot);
  });

  // Controls
  prevBtn?.addEventListener('click', () => { go(index - 1); start(); });
  nextBtn?.addEventListener('click', () => { go(index + 1); start(); });

  // Resize handling
  window.addEventListener('resize', update);

  // Touch swipe
  let startX = 0;
  let isDragging = false;
  slider.addEventListener('pointerdown', (e) => { isDragging = true; startX = e.clientX; stop(); });
  slider.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    isDragging = false; start();
  });
  slider.addEventListener('pointerleave', () => { if (isDragging) { isDragging = false; start(); } });

  // Init
  update();
  start();
})();

// Header shrink on scroll
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
});

// Reveal on scroll
(function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });
  elements.forEach(el => io.observe(el));
})();

// Nav active link highlight on scroll
(function activateNavOnScroll() {
  const sections = Array.from(document.querySelectorAll('main section')).filter(s => s.id);
  const links = Array.from(document.querySelectorAll('.nav a'));
  if (!sections.length || !links.length) return;
  function setActive(id) {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));
})();

// Parallax hero overlay
const heroOverlay = document.querySelector('.hero-overlay');
if (heroOverlay) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.2;
    heroOverlay.style.transform = `translateY(${y}px)`;
  }, { passive: true });
}


