import { model } from "../models/index.js";
import { updateView } from "../views/view.js";

export function searchRecipes() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const filteredRecipes = model.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchInput)
    );

    console.log(filteredRecipes);

    model.app.searchResults = filteredRecipes;

    updateView();
}
