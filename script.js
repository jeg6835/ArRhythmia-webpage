const navLinks = document.querySelectorAll('nav li');

navLinks.forEach(link => {
  link.addEventListener('click', setActive);
});

function setActive(e) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  e.target.classList.add('active');
}