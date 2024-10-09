class mobileNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav class="fixed bottom-0 left-0 right-0 rounded-t-lg shadow-lg mode">
            <div class="flex items-center justify-around h-12 max-w-md mx-auto">
                <a href="/src/html/tentang.html" class="flex flex-col items-center justify-center nav-link hover:text-primary"><i class='text-2xl bx bx-user'></i></a>
                <a href="/src/html/pengalaman.html" class="flex flex-col items-center justify-center nav-link hover:text-primary"><i class='text-2xl bx bx-collection'></i></a>
                <a href="/src/html/skils.html" class="flex flex-col items-center justify-center nav-link hover:text-primary"><i class='text-2xl bx bx-code-alt'></i></a>
                <a href="/src/html/portfolio.html" class="flex flex-col items-center justify-center nav-link hover:text-primary"><i class='text-2xl bx bx-customize'></i></a>
                <a href="/src/html/kontak.html" class="flex flex-col items-center justify-center nav-link hover:text-primary"><i class='text-2xl bx bx-support'></i></a>
            </div>
        </nav>
            `;
  }
}

// Definisikan komponen kustom
customElements.define('component-mobilenav', mobileNav);
