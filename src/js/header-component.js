class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <header class="fixed top-0 left-0 right-0 z-40 h-12 mode">
        <div class="flex items-center justify-between h-12 max-w-md p-5 mx-auto lg:px-8">
            <a href="/index.html" class="-m-1.5 p-1.5 flex items-center py-5">
                <img class="w-auto h-8" src="/img/hero.png" alt="hero">
                <div class="ml-4 text-lg font-bold ">Ido Putra <span
                        class="text-primary">Manullang</span></div>
            </a>
              <button id="theme-toggle" class="text-gray-600 dark:text-gray-300 focus:outline-none">
                <i id="theme-icon" class='text-2xl bx bx-sun'></i>
            </button>
        </div>
    </header>
        `;
  }
}
customElements.define('component-header', Header);
