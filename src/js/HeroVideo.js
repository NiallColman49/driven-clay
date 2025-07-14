setTimeout(() => {
    const hero = document.querySelector('.js-hero-video');
    const mainContent = document.querySelector('.js-main-content');
    const placeholder = document.querySelector('.js-video-placeholder');

    // Fade out hero section
    hero.classList.add('fade-out');

    // Fade in main content
    mainContent.classList.add('fade-in');

    // Remove hero section after fade
    setTimeout(() => hero.remove(), 1500);
}, 10000);

// Optional: Remove placeholder earlier, once video likely loaded
setTimeout(() => {
    const placeholder = document.querySelector('.js-video-placeholder');
    if (placeholder) {
        placeholder.classList.add('fade-out');
        setTimeout(() => placeholder.remove(), 1500);
    }
}, 3000);
