function openModal(button) {
    const modal = document.getElementById('productModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    const productCard = button.parentElement;
    const img = productCard.querySelector('img');
    const title = productCard.querySelector('h3');
    const description = productCard.querySelector('p');
    
    modalImg.src = img.src;
    modalTitle.textContent = title.textContent;
    modalDescription.textContent = description.textContent;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}