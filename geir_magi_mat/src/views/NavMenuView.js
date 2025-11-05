export const openMenu = () => {
    const menu = document.getElementById("navmenu");
    menu.style.transform = "translate(0px, 0)";
};

export const closeMenu = () => {
    const menu = document.getElementById("navmenu");
    menu.style.transform = "translate(280px, 0)";
};

export const navMenu = /* html */ `
    <div class="navmenu-container" id="navmenu">
        <h2>Navigasjon</h2>
        <ul>
            <li><a href="#">Mine Oppskrifter</a></li>
            <li><a href="#">Utforsk Oppskrifter</a></li>
            <li><a href="#">Innstillinger</a></li>
        </ul>
    </div>
`;
