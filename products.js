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


// Scroll to Top Function
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


  
