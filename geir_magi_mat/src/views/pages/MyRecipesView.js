import { model } from "../../models/index.js";
import { MyRecipeCard } from "../components/MyRecipeCard.js";

function displayRecipes() {
    const recipeData = model.app.searchResults.length > 0 ? model.app.searchResults : model.recipes;

    console.log(recipeData);

    return recipeData
        .map((recipe, idx) => {
            return /* html */ ` <div class="recipeCard-group">${MyRecipeCard(recipe, idx)}</div> `;
        })
        .join("");
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

            <div class="recipesContainer">${displayRecipes()}</div>

            <div class="btn-group">
                <button onclick="switchPage('NewRecipe')" class="btn btn-primary">
                    Legg til oppskrift
                </button>
                <a href="/suggest-recipe" data-link class="btn btn-secondary">Anbefal oppskrift</a>
            </div>
        </main>
    `;
}
