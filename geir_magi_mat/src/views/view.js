import { model } from "../models/index.js";
import { FrontPageView } from "./FrontPageView.js";
import { ExploreRecipesView } from "./ExploreRecipesView.js";
import { NewRecipeView } from "./NewRecipeView.js";
import { setupNewRecipePage } from "../views/NewRecipeView.js";
import { myRecipesView } from "./MyRecipesView.js";
import { FullRecipeView } from "./FullRecipeView.js";
import { editRecipeView } from "./EditRecipeView.js";
import { navMenu } from "./NavMenuView.js";

const navBar = /* html */ `
    <nav>
        <div class="empty-placeholder" id="dont-remove-plz"></div>
        <div onclick="switchPage('FrontPage')" id="logo">
            <h1>Middags-Magi</h1>
        </div>
        <div onclick="handleToggleMenu()"><i class="fa-solid fa-bars fa-xl"></i></div>
    </nav>
`;

const footer = /* html */ ` <footer>© Middags-Magi</footer> `;

const page = () => {
    const pageHtml = pageManager();
    return /* html */ ` ${navBar} ${navMenu} ${pageHtml} ${footer} `;
};

export function updateView() {
    document.getElementById("app").innerHTML = page();

    switch (model.app.currentPage) {
        case "NewRecipe":
            setupNewRecipePage();
            break;
    }
}

function pageManager() {
    switch (model.app.currentPage) {
        case "FrontPage":
            return FrontPageView();
        case "ExploreRecipes":
            return ExploreRecipesView();
        case "NewRecipe":
            return NewRecipeView();
            case "MyRecipes":
            return myRecipesView();
        case "FullRecipe":
            return FullRecipeView();
        case "EditRecipe":
            return editRecipeView();
        default:
            return "";
    }
}
