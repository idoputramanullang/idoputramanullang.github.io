    // dark mode
    const updateIcon = (htmlElement, themeIcon) => {
    if (htmlElement.classList.contains('dark')) {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    } else {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    }
    };
    const initThemeToggle = () => {
    const themeToggleButton = document.querySelector('#theme-toggle');
    const themeIcon = document.querySelector('#theme-icon');
    const htmlElement = document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
    updateIcon(htmlElement, themeIcon);
    themeToggleButton.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');  
        } else {
        localStorage.setItem('theme', 'light');  
        } 
        updateIcon(htmlElement, themeIcon);
    });
    }; 
    document.addEventListener('DOMContentLoaded', initThemeToggle);





    // text mengetik 

    const text = 'Beckend developer';
    let index = 0;
    const speed = 100; // Kecepatan mengetik
    const delayBetweenCycles = 1000; // Delay antar pengetikan dan penghapusan
    const typingElement = document.getElementById('text-typing');

    function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // Jika pengetikan selesai, tunggu sebentar sebelum menghapus teks
        setTimeout(deleteText, delayBetweenCycles);
    }
    }

    function deleteText() {
    if (index > 0) {
        typingElement.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(deleteText, speed);
    } else { 
        setTimeout(typeWriter, speed);
    }
    } 
    window.onload = function () {
    setTimeout(typeWriter, speed);
};
    

// mobileNav aktif
// Fungsi untuk menambahkan kelas text-primary ke link yang aktif
    window.addEventListener('DOMContentLoaded', () => {
        // Ambil URL saat ini
        const currentUrl = window.location.pathname;

        // Ambil semua elemen dengan kelas .nav-link
        const navLinks = document.querySelectorAll('.nav-link');

        // Loop melalui setiap link dan cek apakah href cocok dengan URL saat ini
        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Jika href sama dengan URL saat ini, tambahkan kelas text-primary
            if (currentUrl.includes(href)) {
                link.classList.add('text-primary');
            }
        });
    });