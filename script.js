document.addEventListener('DOMContentLoaded', function () {
    // 1. Lightbox Configuration Settings
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': "Image %1 of %2 (फोटो %1 पैकी %2)",
            'fadeDuration': 300,
            'imageFadeDuration': 300
        });
    }

    // 2. Smooth Navigation Scroll
    const anchorLinks = document.querySelectorAll('nav a[href^="#"], .hero-buttons a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});