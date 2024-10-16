
function toggleImage(button) {
    const card = button.closest('.card');
    const img1 = card.querySelector('.img1');
    const img2 = card.querySelector('.img2');
  
    if (img1.classList.contains('d-none')) {
      img1.classList.remove('d-none');
      img2.classList.add('d-none');
      button.textContent = 'View Image';
    } else {
      img1.classList.add('d-none');
      img2.classList.remove('d-none');
      button.textContent = 'Back to Image';
    }
  }
  

  // scroll navbar  change color 

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


  

  

 