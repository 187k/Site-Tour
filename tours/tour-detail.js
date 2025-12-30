// Tour detail page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language if coming from main page
    const savedLang = localStorage.getItem('language') || 'en';
    if (typeof setLanguage === 'function') {
        setLanguage(savedLang);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

