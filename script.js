// Toggle Mobile Navigation
document.getElementById('navToggle').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});

// Sticky header background color change
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky-active');
  } else {
    header.classList.remove('sticky-active');
  }
});

// Basic cart logic
const cart = [];

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-id');
    cart.push(id);
    alert(`Product ${id} added to cart. Total items: ${cart.length}`);
  });
});
