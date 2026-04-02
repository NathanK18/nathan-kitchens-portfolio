// Smooth entrance animation for hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      heroInner.style.opacity = '0';
      heroInner.style.transform = 'translateY(18px)';
      heroInner.style.transition = 'opacity .7s ease, transform .7s ease';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          heroInner.style.opacity = '1';
          heroInner.style.transform = 'translateY(0)';
        });
      });
    }
  });