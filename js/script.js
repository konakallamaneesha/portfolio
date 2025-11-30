// Navigation & section highlight
const navLinks = document.querySelectorAll(".aside .nav li a, .btn.hire-me");
const sections = document.querySelectorAll("section");

// smooth scroll for aside links and buttons
document.querySelectorAll('.aside .nav li a, .btn.hire-me').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close aside on small screens
    document.querySelector('.aside')?.classList.remove('open');
  });
});

// active nav on scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.2) {
      current = '#' + (section.id || '');
    }
  });
  document.querySelectorAll('.aside .nav li a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

// Toggle aside (mobile)
const navToggler = document.querySelector('.aside .nav-toggler');
if (navToggler) {
  navToggler.addEventListener('click', () => {
    document.querySelector('.aside')?.classList.toggle('open');
  });
}

// ===== Contact form -> open mail client (mailto) with prefilled content =====
(function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const to = 'konakallamaneesha13@gmail.com';
    const name = document.getElementById('contact-name').value.trim();
    const from = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || 'Message from portfolio';
    const message = document.getElementById('contact-message').value.trim();

    const bodyText = `Name: ${name}\nEmail: ${from}\n\n${message}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

    // open mail client
    window.location.href = mailto;
  });
})();