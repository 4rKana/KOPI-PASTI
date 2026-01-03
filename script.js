const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // 1. Toggle Navigasi (Buka/Tutup)
        nav.classList.toggle('nav-active');

        // 2. Animasi Link (Muncul satu per satu)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 3. Animasi Burger (Jadi tombol X)
        burger.classList.toggle('toggle');
    });
}

// Jalankan fungsi
navSlide();