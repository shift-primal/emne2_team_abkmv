import { model } from "../../models/index.js";
import { findRecipeByName } from "../../utils/filter.js";
import { RecipeCard } from "../components/RecipeCard.js";

export function ExploreRecipesView() {
    return /* html */ `
        <main>
            <div class="hero-section">
                <h2>Utforsk oppskrifter</h2>
                <div class="hero-section"></div>
                ${getRecipePage()}
            </div>
        </main>
    `;
}

export function getRecipePage() {
    return /* html */ `
        <div class="recipeCard-group">
            ${RecipeCard(findRecipeByName(model.recipes, "Lasagne"))}
        </div>
        <div class="recipeCard-group">
            ${RecipeCard(findRecipeByName(model.recipes, "Kylling Tikka Masala"))}
        </div>
    `;
}
