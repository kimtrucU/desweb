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
  s1.style.opacity = open ? '0' : '';
  s2.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  nav.classList.remove('open');
  ham.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}));

/* ── Active nav on scroll ── */
const sections = [
  { id: 'hero', nl: 'nl-home' },
  { id: 'services', nl: 'nl-group' },
  { id: 'puppy', nl: 'nl-puppy' },
  { id: 'behavior', nl: 'nl-behavior' },
  { id: 'about', nl: 'nl-about' },
  { id: 'blog', nl: 'nl-blog' },
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
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const dog = document.getElementById('f-dog').value.trim();
  const int_ = document.getElementById('f-interest').value;

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

/* ── Schedule Board ── */
const sbData = {
  'puppy-preschool': {
    title: 'Puppy Preschool (Puppies 2 – 6 months old)',
    rows: [
      { name: 'Puppy Basic Obedience',  teacher: 'Kim Trainer',  schedule: 'Mon, Wed, Fri',   time: '09:00 – 10:30', spots: '3 spots left' },
      { name: 'Puppy Socialization',    teacher: 'Ha Phuong',    schedule: 'Sat, Sunday',      time: '15:00 – 16:30', spots: '2 spots left' },
      { name: 'Potty Training Basics',  teacher: 'Minh Anh',     schedule: 'Every Tuesday',    time: '10:00 – 11:00', spots: '5 spots left' },
    ],
  },
  'middle-school': {
    title: 'Middle School (Core Obedience Skills)',
    rows: [
      { name: 'Basic Obedience',        teacher: 'Kim Trainer',  schedule: 'Mon / Wed / Fri',  time: '07:00 – 08:30', spots: '4 spots left' },
      { name: 'Loose-Leash Walking',    teacher: 'Hoang Nam',    schedule: 'Every Wednesday',  time: '17:30 – 18:30', spots: '2 spots left' },
      { name: 'Distraction Training',   teacher: 'Ha Phuong',    schedule: 'Every Saturday',   time: '09:00 – 10:30', spots: '6 spots left' },
    ],
  },
  'finishing-school': {
    title: 'Finishing School (Advanced Skills)',
    rows: [
      { name: 'Off-Leash Freedom',      teacher: 'Kim Trainer',  schedule: 'Tue & Thu',        time: '07:00 – 08:30', spots: '2 spots left' },
      { name: 'Trick Performance',      teacher: 'Ha Phuong',    schedule: 'Every Sunday',     time: '16:00 – 17:30', spots: '4 spots left' },
      { name: 'Canine Good Citizen',    teacher: 'Hoang Nam',    schedule: 'Every Saturday',   time: '13:00 – 15:00', spots: 'Opening soon' },
    ],
  },
  'upcoming': {
    title: 'Upcoming Classes',
    rows: [
      { name: 'Summer Puppy Camp',      teacher: 'Kim Trainer',  schedule: 'Jun 10 – Jun 28',  time: '09:00 – 11:00', spots: 'Register first' },
      { name: 'Behavior Reset Bootcamp',teacher: 'Minh Anh',     schedule: 'Jun 12',           time: '14:00 – 17:00', spots: 'Opening soon' },
      { name: 'Family Dog Workshop',    teacher: 'Ha Phuong',    schedule: 'Jun 22',           time: '10:00 – 13:00', spots: 'Register first' },
    ],
  },
};

function renderSbTable(rows) {
  const tbody = document.getElementById('sbTbody');
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td>
        <div class="sb-class-name">${r.name}</div>
        <div class="sb-trainer">Trainer: ${r.teacher}</div>
      </td>
      <td class="sb-schedule-col">${r.schedule}</td>
      <td class="sb-time-col">${r.time}</td>
      <td><span class="sb-status-badge">${r.spots}</span></td>
      <td><button class="sb-btn" onclick="showToast('We will contact you soon! 🐾')">Find out more</button></td>
    </tr>
  `).join('');
}

function renderSbCards(rows) {
  const cards = document.getElementById('sbCards');
  cards.innerHTML = rows.map(r => `
    <div class="sb-card">
      <div class="sb-card-top">
        <div>
          <div class="sb-card-name">${r.name}</div>
          <div class="sb-card-trainer">Trainer: ${r.teacher}</div>
        </div>
        <span class="sb-status-badge">${r.spots}</span>
      </div>
      <div class="sb-card-info">
        <span>📅 ${r.schedule}</span>
        <span>🕐 <span class="yellow">${r.time}</span></span>
      </div>
      <div class="sb-card-actions">
        <button class="sb-card-btn" onclick="showToast('We will contact you soon! 🐾')">Find out more</button>
      </div>
    </div>
  `).join('');
}

function switchSbTab(tabKey) {
  const data = sbData[tabKey];
  if (!data) return;
  document.getElementById('sbBoardTitle').textContent = data.title;
  renderSbTable(data.rows);
  renderSbCards(data.rows);
  document.querySelectorAll('.sb-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabKey);
  });
}

// Init first tab + wire up clicks
const firstTab = 'puppy-preschool';
switchSbTab(firstTab);
document.querySelectorAll('.sb-tab').forEach(btn => {
  btn.addEventListener('click', () => switchSbTab(btn.dataset.tab));
});
