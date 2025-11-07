import { model } from "../models/index.js";
import { FrontPageView } from "./pages/FrontPageView.js";
import { ExploreRecipesView } from "./pages/ExploreRecipesView.js";
import { NewRecipeView } from "./pages/NewRecipeView.js";
import { MyRecipesView } from "./pages/MyRecipesView.js";
import { ShowRecipeView } from "./pages/ShowRecipeView.js";
import { SuggestRecipeView } from "./pages/SuggestRecipeView.js";
import { NavBarView } from "./ui/NavBarView.js";
import { NavMenuView } from "./ui/NavMenuView.js";
import { FooterView } from "./ui/FooterView.js";

const page = () => {
    const pageHtml = pageManager();
    return /* html */ ` ${NavBarView()} ${NavMenuView()} ${pageHtml} ${FooterView()} `;
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
        case "ShowRecipe":
            return ShowRecipeView();
        case "SuggestRecipe":
            return SuggestRecipeView();
        default:
            return "";
    }
}
