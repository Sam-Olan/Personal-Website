document.addEventListener('DOMContentLoaded', async function() {
    // Load navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        const navbarResponse = await fetch('/components/navbar.html');
        const navbarHtml = await navbarResponse.text();
        navbarContainer.innerHTML = navbarHtml;
    }

    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const footerResponse = await fetch('/components/footer.html');
        const footerHtml = await footerResponse.text();
        footerContainer.innerHTML = footerHtml;
    }
}); 