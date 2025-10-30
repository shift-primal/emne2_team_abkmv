import { model } from "../models/index.js";
import { ShowRecipeCard } from "./components/ShowRecipeCard.js";
import { updateView } from "./view.js";
import { findRecipeByName } from "../utils/filter.js";

export function ShowRecipeView(){
    const recipe = model.app.selectedRecipe;
    if (!recipe) {
        return /* html */ `<div>No recipe selected</div>`;
    }
    return /* html */ `
    <div class="show-recipe">
        <div class="recipe-container">

            <div class="details-container">
                ${ShowRecipeCard(recipe)}
            </div>

            <h5>Ingredienser</h5>
            <div class="ingredients-container">
                <div class="portion-container">
                    <div class="decrease-portion-btn">-</div>
                        <div class="portion-size">1</div>
                    <div class="increase-portion-btn">+</div>

                </div>
                ${recipe.ingredients.map(ing => `<p>${ing.amount} ${ing.metric} ${ing.ingredient}</p>`).join('')}
            </div>

            <h5>Fremgangsmåte</h5>
            <div class="instructions-container">
                ${recipe.recipeSteps.map(step => `<p>${step}</p>`).join('')}
            </div>
        </div>
    </div>


    `;
}
