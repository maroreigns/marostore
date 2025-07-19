//  // Get the navbar element
const navbar = document.querySelector('.navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


const scrollTopBtn = document.getElementById("scrollTopBtn");

// scroll to top function
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.opacity = "1";  // Fully visible
    scrollTopBtn.style.pointerEvents = "auto";  // Enable click
  } else {
    scrollTopBtn.style.opacity = "1";  // Partially visible
    scrollTopBtn.style.pointerEvents = "none";  // Prevent click when not needed
  }
};

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});






