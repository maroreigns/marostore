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
  