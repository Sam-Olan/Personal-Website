document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
    initializeMobileNavigation();
});

function initializeCarousels() {
    const carousels = document.querySelectorAll('.project-image');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        
        if (images.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }
        
        let currentImageIndex = 0;
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }
        
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }
        
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
        if (nextBtn) nextBtn.addEventListener('click', nextImage);
    });
}

function initializeMobileNavigation() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        const visibility = navLinks.getAttribute('data-visible');
        
        if (visibility === "false" || !visibility) {
            navLinks.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        } else {
            navLinks.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    });

    document.addEventListener('click', (e) => {
        if (!navToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.setAttribute('data-visible', false);
            navToggle?.setAttribute('aria-expanded', false);
        }
    });
} 