import { model } from "../models/index.js";
import { updateView } from "../views/view.js";
import { formatNameToId } from "../utils/format.js";

export function switchPage(newPage, data = null) {
    model.app.currentPage = newPage;
    if (newPage === "ShowRecipe" && data) {
        const originalRecipe = model.recipes.find(
            (recipe) => formatNameToId(recipe.name) === data
        );
        model.app.selectedRecipe = { ...originalRecipe };
    }
    updateView();
}
