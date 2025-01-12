document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.animate-fade-in');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // 30% видимости
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Отключаем наблюдение после анимации
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    blocks.forEach(block => {
        observer.observe(block);
    });
});