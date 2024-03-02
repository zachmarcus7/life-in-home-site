/* ------------------------------------------------------------------ */
/* Functionality for slight fade-up on elements when they're scrolled
/* into view.
/* ------------------------------------------------------------------ */

const generalOptions = {};

const generalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('faded');
      generalObserver.unobserve(entry.target);
    }
  });
}, generalOptions);

// observe all required elements at once
document.querySelectorAll('.slight-fade-up').forEach(element => {
  generalObserver.observe(element);
});