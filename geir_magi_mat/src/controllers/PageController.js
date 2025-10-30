import { model } from "../models/index.js";
import { updateView } from "../views/view.js";
import { findRecipeByName } from "../utils/filter.js";

export function switchPage(newPage, data = null) {
    model.app.currentPage = newPage;
    if (newPage === 'ShowRecipe' && data) {
        model.app.selectedRecipe = findRecipeByName(model.recipes, data);
    }
    updateView();
}
