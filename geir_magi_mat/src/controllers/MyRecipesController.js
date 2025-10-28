import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { updateView } from "../views/view.js";

export function searchRecipes() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = model.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput)
    );
    // Update the model or directly update the view with filtered recipes
    // For simplicity, we can store filtered recipes in the model
    model.app.filteredRecipes = filteredRecipes;
    updateView();
}


