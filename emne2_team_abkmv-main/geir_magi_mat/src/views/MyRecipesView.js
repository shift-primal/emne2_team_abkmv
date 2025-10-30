import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";
import { updateView } from "./view.js";

function searchRecipes() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const filteredRecipes = model.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchInput)
    );
    model.recipesModel.searchResults.push([...filteredRecipes])
    console.log(model.recipesModel.searchResults)
    updateView();
}

export function MyRecipesView() {
    return /* html */ `
        <main class="my-recipes-view">
            <h2>Mine oppskrifter</h2>
            <div class="search-container">
                <input
                    type="text"
                    id="search-bar"
                    class="search-bar"
                    placeholder="Søk oppskrifter..."
                />
                <button class="search-btn" onclick="searchRecipes()">🔍︎</button>
            </div>
            <div class="recipesContainer">
                ${model.recipes
                    .map((recipe) => {
                        return /* html */ `
                        <div class="recipeCard-group">${MyRecipeCard(recipe)}</div>`;
                    })
                    .join("")}
            </div>
        </div>
        <div class="btn-group">
            <button onclick="switchPage('NewRecipe')" class="btn btn-primary">
                Legg til oppskrift
            </button>
            <button class="btn btn-secondary">Anbefal oppskrift</button>
        </main>
    `;
}
