import { model } from "../models/index.js";
import { FrontPageView } from "./pages/FrontPageView.js";
import { ExploreRecipesView } from "./pages/ExploreRecipesView.js";
import { NewRecipeView } from "./pages/NewRecipeView.js";
import { MyRecipesView } from "./pages/MyRecipesView.js";
import { FullRecipeView } from "./pages/ShowRecipeView.js";
import { navMenu } from "./ui/NavMenuView.js";
import { SuggestRecipeView } from "./pages/SuggestRecipeView.js";

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
            return MyRecipesView();
        case "FullRecipe":
            return FullRecipeView();
        case "SuggestRecipe":
            return SuggestRecipeView();
        default:
            return "";
    }
}
