document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("scroll-popup");
  const closeButton = document.getElementById("close-popup");
  const animateSections = document.querySelectorAll(".animate-section");
  let popupShown = false;

  function showPopup() {
    if (!popupShown && window.scrollY > 300) {
      popup.style.display = "block";
      setTimeout(() => {
        popup.classList.add("show");
      }, 10);
      popupShown = true;
    }
  }

  function hidePopup() {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  }

  function animateOnScroll() {
    animateSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", () => {
    showPopup();
    animateOnScroll();
  });

  closeButton.addEventListener("click", hidePopup);

  // Initial check for elements in view
  animateOnScroll();

  // Existing smooth scroll code
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
