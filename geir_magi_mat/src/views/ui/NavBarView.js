export function NavBarView() {
    return /* html */ `
        <nav>
            <div class="empty-placeholder" id="dont-remove-plz"></div>
            <a href="/" data-link id="logo">
                <h1>Middags-Magi</h1>
            </a>
            <div data-action="toggle-menu"><i class="fa-solid fa-bars fa-xl"></i></div>
        </nav>
    `;
}
