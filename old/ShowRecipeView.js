import { model } from "../geir_magi_mat/src/models/index.js";
import { ShowRecipeCard } from "../geir_magi_mat/src/views/components/ShowRecipeCard.js";
import { PortionCalculator } from "../geir_magi_mat/src/views/components/PortionCalculator.js";

export function ShowRecipeView() {
    const recipe = model.app.selectedRecipe;

    const originalRecipe = model.recipes.find((r) => r.id === recipe.id);
    return /* html */ `
        <div class="show-recipe">
            <div class="recipe-container">
                <div class="details-container">${ShowRecipeCard(recipe)}</div>

                <h5>Ingredienser</h5>
                <div class="ingredients-container">
                    ${PortionCalculator(recipe)}
                    ${originalRecipe.ingredients
                        .map((ing) => {
                            const factor = recipe.portionSize / originalRecipe.portionSize;
                            const scaledAmount =
                                typeof ing.amount === "number"
                                    ? (ing.amount * factor).toFixed(2).replace(/\.00$/, "")
                                    : ing.amount;
                            return `<p>${scaledAmount || ""} ${ing.metric} ${ing.ingredient}</p>`;
                        })
                        .join("")}
                </div>

                <h5>Fremgangsmåte</h5>
                <div class="instructions-container">
                    ${recipe.recipeSteps.map((step) => `<p>${step}</p>`).join("")}
                </div>
            </div>
        </div>
    `;
}
