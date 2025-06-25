// script.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thanks for clicking! This is a sample interaction.");
    });
  });

  // Animate elements on scroll
  const fadeElements = document.querySelectorAll(".card, .review, .help-box, .about");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach((el) => observer.observe(el));
});
