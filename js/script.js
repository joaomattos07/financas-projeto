const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
  });
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

const formContato = document.getElementById('formContato');
const formFeedback = document.getElementById('formFeedback');

formContato.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = formContato.email.value;
  const emailValido = /\S+@\S+\.\S+/.test(email);

  if (!emailValido) {
    formFeedback.textContent = 'Digite um e-mail válido.';
    formFeedback.className = 'form-feedback erro';
    return;
  }

  formFeedback.textContent = 'Mensagem enviada! Retornaremos em breve.';
  formFeedback.className = 'form-feedback sucesso';
  formContato.reset();
});

const elementosReveal = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
});

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});