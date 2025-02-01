document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load navbar
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            const navbarResponse = await fetch('./components/navbar.html');
            navbarContainer.innerHTML = await navbarResponse.text();
            initializeNavigation();
        }

        // Load footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            const footerResponse = await fetch('./components/footer.html');
            footerContainer.innerHTML = await footerResponse.text();
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
});

function initializeNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.setAttribute('data-visible', !isExpanded);
        });
    }
} 