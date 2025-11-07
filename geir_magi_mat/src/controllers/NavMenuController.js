import { model } from "../models/index.js";
import { closeMenu, openMenu } from "../views/ui/NavMenuView.js";

export const handleToggleMenu = () => {
    model.app.navMenuOpen = !model.app.navMenuOpen;
    model.app.navMenuOpen ? openMenu() : closeMenu();
};
