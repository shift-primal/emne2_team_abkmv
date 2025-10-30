import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { RecipeCard } from "./components/RecipeCard.js";

export function ExploreRecipesView() {
    return /* html */ `
        <main>
            <div class="hero-section">
                <h2>Utforsk oppskrifter</h2>
                <div class="hero-section"></div>
                ${getRecipePage()} ${pageButtons()}
            </div>
        </main>
    `;
}

export function getRecipePage() {
    return /* html */ `
        <div class="recipeCard-group">
            ${RecipeCard(findRecipeByName(model.recipes, "lasagne"))}
        </div>
        <div class="recipeCard-group">
            ${RecipeCard(findRecipeByName(model.recipes, "lasagne"))}
        </div>
    `;
}

function pageButtons() {
    return /* html */ `
        <div class="page-buttons">
            <button onclick="previousPage()">Previous</button>
            <button onclick="nextPage()">Next</button>
        </div>
    `;
}
