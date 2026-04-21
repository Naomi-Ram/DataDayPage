// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}
window.addEventListener('scroll', highlightNav);

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const animElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
animElements.forEach(el => observer.observe(el));

// ===== HERO CAROUSEL =====
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
if (track) {
  const slides = track.querySelectorAll('.carousel-slide');
  let current = 0;
  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  function goToSlide(index) {
    current = index;
    // Each slide is flex: 0 0 100% so we translate by multiples of 100%
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }
  // Auto-play
  setInterval(() => {
    current = (current + 1) % slides.length;
    goToSlide(current);
  }, 4000);
}

// ===== FLOATING PARTICLES =====
const particlesContainer = document.querySelector('.hero-particles');
if (particlesContainer) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.top = (60 + Math.random() * 40) + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    particlesContainer.appendChild(p);
  }
}
