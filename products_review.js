function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// products_review.js

function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.style.display === "block") {
        detailsElement.style.display = "none";
    } else {
        detailsElement.style.display = "block";
    }
}

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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
  


