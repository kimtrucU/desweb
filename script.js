document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  navToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  const form = document.getElementById('consultForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! Your consultation request has been submitted. We will contact you soon.');
    form.reset();
  });
});
