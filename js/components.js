document.addEventListener('DOMContentLoaded', async function() {
    // Load navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        try {
            const navbarResponse = await fetch('./components/navbar.html');
            const navbarHtml = await navbarResponse.text();
            navbarContainer.innerHTML = navbarHtml;
            
            // Reinitialize mobile nav functionality after loading
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (mobileNavToggle && navLinks) {
                mobileNavToggle.addEventListener('click', () => {
                    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
                    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
                    navLinks.setAttribute('data-visible', !isExpanded);
                });
            }
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        try {
            const footerResponse = await fetch('./components/footer.html');
            const footerHtml = await footerResponse.text();
            footerContainer.innerHTML = footerHtml;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }
}); 