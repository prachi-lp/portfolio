// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;

    if (sectionTop < trigger) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initial state
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.6s ease';
});
