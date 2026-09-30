// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        icon.className = 'fas fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'light');
        icon.className = 'fas fa-sun';
    }
});