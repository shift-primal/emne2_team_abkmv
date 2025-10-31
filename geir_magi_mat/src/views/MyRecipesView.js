import { model } from "../models/index.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";

const renderRecipes = () => {
    if (model.app.searchResults[0]) {
        return model.app.searchResults
            .map((recipe) => {
                return /* html */ ` <div class="recipeCard-group">${MyRecipeCard(recipe)}</div> `;
            })
            .join("");
    }
    return model.recipes
        .map((recipe) => {
            return /* html */ ` <div class="recipeCard-group">${MyRecipeCard(recipe)}</div> `;
        })
        .join("");
};

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
                ${renderRecipes()}
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
