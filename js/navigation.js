// This file manages the navigation functionality, including smooth scrolling and active link highlighting.

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    // Smooth scrolling for internal navigation links only (same page)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links (starting with #) on same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For external links and page navigation, allow default behavior
        });
    });

    // Highlight active link based on scroll position
    window.addEventListener('scroll', function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Only process anchor links
            if (href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });
});