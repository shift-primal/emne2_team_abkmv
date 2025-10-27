import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";

export function MyRecipesView() {
    return /*HTML*/ `<div class="explore-recipes">
        <div class="hero-section">
            <h2>Mine oppskrifter</h2>
                <div class="hero-section"></div>
                <div class="recipeCard-group">${MyRecipeCard(findRecipeByName(model.recipes, "lasagne"))}</div>
			<div class="recipeCard-group">${MyRecipeCard(findRecipeByName(model.recipes, "Kylling Tikka Masala"))}</div>
			<div class="recipeCard-group">${MyRecipeCard(findRecipeByName(model.recipes, "Taco"))}</div>
              
        </div>
    </div>`;
}
