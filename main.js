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

// ===== MODAL / POP-UP SYSTEM =====
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalEls = {
  badge: document.getElementById('modalBadge'),
  title: document.getElementById('modalTitle'),
  speaker: document.getElementById('modalSpeaker'),
  role: document.getElementById('modalRole'),
  bio: document.getElementById('modalBio'),
  time: document.getElementById('modalTime'),
  location: document.getElementById('modalLocation'),
};

function openModal(card) {
  modalEls.badge.textContent = card.dataset.modalType || '';
  modalEls.title.textContent = card.dataset.modalTitle || '';
  modalEls.speaker.textContent = card.dataset.modalSpeaker || '';
  modalEls.role.textContent = card.dataset.modalRole || '';
  modalEls.bio.textContent = card.dataset.modalBio || '';
  modalEls.time.textContent = card.dataset.modalTime ? '🕐 ' + card.dataset.modalTime : '';
  modalEls.location.textContent = card.dataset.modalLocation ? '📍 ' + card.dataset.modalLocation : '';
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.clickable[data-modal-title]').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== 3D TILT EFFECT (desktop only) =====
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.boxShadow = `0 12px 40px rgba(0,229,255,.18)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

// ===== FLOATING BACK BUTTON LOGIC =====
const backToTimelineBtn = document.getElementById('backToTimelineBtn');
let savedScrollPosition = null;

// Global helper called directly from timeline onclick handlers
window.navigateToSection = function(href) {
  savedScrollPosition = window.scrollY;
  window.location.href = href;
  setTimeout(() => {
    if (backToTimelineBtn) backToTimelineBtn.classList.add('visible');
  }, 1000);
  return false;
};

if (backToTimelineBtn) {
  // Also catch plain <a class="timeline-card"> links with no onclick
  document.querySelectorAll('a.timeline-card:not([onclick])').forEach(link => {
    link.addEventListener('click', () => {
      savedScrollPosition = window.scrollY;
      setTimeout(() => {
        backToTimelineBtn.classList.add('visible');
      }, 1000);
    });
  });

  // Handle clicking the back button
  backToTimelineBtn.addEventListener('click', () => {
    if (savedScrollPosition !== null) {
      window.scrollTo({
        top: savedScrollPosition,
        behavior: 'smooth'
      });
      backToTimelineBtn.classList.remove('visible');
      savedScrollPosition = null;
    }
  });

  // Hide button if user manually scrolls back up to the horario section
  window.addEventListener('scroll', () => {
    if (backToTimelineBtn.classList.contains('visible')) {
      const conferenciasSection = document.getElementById('conferencias');
      if (conferenciasSection) {
        // Hide only if user scrolls above the Conferencias section
        if (window.scrollY < conferenciasSection.offsetTop - 200) {
           backToTimelineBtn.classList.remove('visible');
           savedScrollPosition = null;
        }
      }
    }
  }, { passive: true });
}

// ===== SCROLL INDICATOR: hide after scrolling =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  window.addEventListener('scroll', () => {
    scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '0.7';
    scrollIndicator.style.pointerEvents = window.scrollY > 100 ? 'none' : 'auto';
  }, { passive: true });
}
