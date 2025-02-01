document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeMobileNavigation();
});

function initializeCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
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