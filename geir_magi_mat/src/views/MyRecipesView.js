import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";

export function MyRecipesView() {
	return /*HTML*/ `<div class="explore-recipes">
        <div class="hero-section">
            <h2>Mine oppskrifter</h2>
                ${model.recipes.map((recipe) => {
									return `
                                                    <div class="recipeCard-group">${MyRecipeCard(recipe)}</div>`;
								})}
        </div>
    </div>`;
}
