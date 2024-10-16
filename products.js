document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
      const productDescription = this.closest('.product').querySelector('.more-text');
      if (productDescription.classList.contains('d-none')) {
        productDescription.classList.remove('d-none');
        this.textContent = 'Read Less';
      } else {
        productDescription.classList.add('d-none');
        this.textContent = 'Read More';
      }
    });
  });
  


   // Get the navbar element
const navbar = document.querySelector('.navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


// scroll to top function
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.opacity = "1";  // Fully visible
    scrollTopBtn.style.pointerEvents = "auto";  // Enable click
  } else {
    scrollTopBtn.style.opacity = "0.5";  // Partially visible
    scrollTopBtn.style.pointerEvents = "none";  // Prevent click when not needed
  }
};

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



  

  
