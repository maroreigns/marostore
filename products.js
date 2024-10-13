document.getElementById('submitReview').addEventListener('click', function() {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value;

    if (reviewText) {
        const reviewSection = document.getElementById('reviewSection');
        const newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `<p>${reviewText}</p>`;
        reviewSection.appendChild(newReview);
        reviewInput.value = ''; // Clear input after submission
    } else {
        alert('Please write a review before submitting.');
    }
});
