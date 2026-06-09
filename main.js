// =============================================
// THE RIGHT ANGLE — main.js
// =============================================

// Navbar: add shadow/bg on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(10, 26, 15, 0.97)';
    navbar.style.borderBottomColor = 'rgba(201,168,76,0.18)';
  } else {
    navbar.style.background = 'rgba(10, 26, 15, 0.85)';
    navbar.style.borderBottomColor = 'rgba(201,168,76,0.1)';
  }
});

// Mobile burger menu (basic toggle — expand later)
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10,26,15,0.98)';
    navLinks.style.padding = '1.5rem';
    navLinks.style.gap = '1.25rem';
    navLinks.style.borderBottom = '1px solid rgba(201,168,76,0.15)';
  });
}

// CERTLE timer (demo countdown from 5:00)
const timerEl = document.querySelector('.timer-val');
if (timerEl) {
  let seconds = 5 * 60;
  const tick = setInterval(() => {
    seconds--;
    if (seconds <= 0) { clearInterval(tick); timerEl.textContent = '0:00'; return; }
    const m = Math.floor(seconds / 60);
    const s = String(seconds % 60).padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
  }, 1000);
}

// Fade-in on scroll for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.subjects, .certle-feature, .pricing, .tutoring').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
