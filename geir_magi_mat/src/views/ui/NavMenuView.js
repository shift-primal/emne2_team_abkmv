export const openMenu = () => {
    const menu = document.getElementById("navmenu");
    menu.style.transform = "translate(0px, 0)";
};

export const closeMenu = () => {
    const menu = document.getElementById("navmenu");
    menu.style.transform = "translate(280px, 0)";
};

export function NavMenuView() {
    return /* html */ `
        <div class="navmenu-container" id="navmenu">
            <h2>Navigasjon</h2>
            <ul>
                <li><a href="/my-recipes" data-link>Mine Oppskrifter</a></li>
                <li><a href="/explore-recipes" data-link>Utforsk Oppskrifter</a></li>
                <li><a href="/suggest-recipe" data-link>Anbefal oppskrift</a></li>
                <li><a href="/" data-link>Innstillinger</a></li>
            </ul>
        </div>
    `;
}