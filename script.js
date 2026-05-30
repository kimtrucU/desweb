/* Kim The Dog Trainer – script.js */

/* ── Sticky navbar ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 22px rgba(0,0,0,.13)'
    : '0 2px 12px rgba(0,0,0,.07)';
}, { passive: true });

/* ── Hamburger ── */
const ham = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');
ham.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  const [s0, s1, s2] = ham.querySelectorAll('span');
  s0.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
  s1.style.opacity   = open ? '0' : '';
  s2.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  nav.classList.remove('open');
  ham.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

/* ── Active nav on scroll ── */
const sections = [
  { id: 'hero',         nl: 'nl-home' },
  { id: 'services',     nl: 'nl-group' },
  { id: 'puppy',        nl: 'nl-puppy' },
  { id: 'behavior',     nl: 'nl-behavior' },
  { id: 'about',        nl: 'nl-about' },
  { id: 'blog',         nl: 'nl-blog' },
];
function updateNav() {
  const y = window.scrollY + 140;
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id);
    if (el && el.offsetTop <= y) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const n = document.getElementById(sections[i].nl);
      if (n) n.classList.add('active');
      break;
    }
  }
}
window.addEventListener('scroll', updateNav, { passive: true });

/* ── Scroll reveal ── */
document.querySelectorAll(
  '.svc-card,.testi-card,.blog-card,.trust-badge,.after-item,.stat-card,.why-visual,.why-text'
).forEach(el => el.classList.add('reveal'));

new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
  .observe.bind(
    new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })
  );

// Simpler reveal observer
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── Toast ── */
const toastEl = document.getElementById('toast');
function showToast(msg, color) {
  toastEl.textContent = msg;
  toastEl.style.background = color || '#2d8a9e';
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3600);
}

/* ── Consultation form ── */
document.getElementById('consultForm').addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const dog   = document.getElementById('f-dog').value.trim();
  const int_  = document.getElementById('f-interest').value;

  if (!name || !email || !phone || !dog || !int_) {
    showToast('Please fill in all fields.', '#c0392b'); return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email.', '#c0392b'); return;
  }

  const btn = document.getElementById('btnRequest');
  btn.textContent = '✓ SENT!';
  btn.style.background = '#449a38';
  btn.disabled = true;
  showToast(`Thanks ${name}! We'll be in touch soon.`);
  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'REQUEST NOW';
    btn.style.background = '';
    btn.disabled = false;
  }, 4000);
});

/* ── Email subscribe form ── */
document.getElementById('emailForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = document.getElementById('sub-email').value.trim();
  if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    showToast('Enter a valid email.', '#c0392b'); return;
  }
  showToast('Subscribed! 🐾 Welcome to the pack.');
  e.target.reset();
});

/* ── Play button (video placeholder) ── */
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    showToast('Video player coming soon! 🎬');
  });
}

/* ── Blog dots ── */
document.querySelectorAll('.dot').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
