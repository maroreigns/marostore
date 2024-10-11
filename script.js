
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
  

  

  

 