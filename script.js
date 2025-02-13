// Простая анимация при прокрутке
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.news-item, .teacher');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});