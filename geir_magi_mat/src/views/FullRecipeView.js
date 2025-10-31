import { model } from "../models/index.js";
import { PortionCalculator } from "./components/PortionCalculator.js";

export function FullRecipeView() {
    const recipe = model.recipes[4];
    const originalRecipe = model.recipes[4];

    console.log(recipe);

    function generateStars(rating) {
        const filledStar = '<i class="fa-solid fa-star"></i>';
        const emptyStar = '<i class="fa-regular fa-star"></i>';
        const halfStar = '<i class="fa-solid fa-star-half-stroke"></i>';

        const starsArr = new Array(5).fill(0).map((_, i) => {
            if (i < rating && i % rating < 5) {
                return filledStar;
            } else {
                return emptyStar;
            }
        });

        return starsArr.join("");
    }

    console.log(generateStars(2));

    return /* html */ `
        <main id="full-recipe">
            <h1>${recipe.name}</h1>
            <div class="img-container">
                <img src="${recipe.imgUrl}" alt="${recipe.alt}" />
            </div>
            <div id="recipe-heading">
                <h1 id="recipe-description">${recipe.description}</h1>
                <h2 id="recipe-comment">${recipe.comment}</h2>
                <div id="recipe-rating">${generateStars(3.5)}</div>
            </div>
            <div id="lists">
                <div id="ingredients">
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

                <div id="steps">
                    <h2>Fremgangsmåte</h2>
                    <ol>
                        ${recipe.recipeSteps
                            .map((step) => {
                                return /* html */ ` <li>${step}</li> `;
                            })
                            .join("")}
                    </ol>
                </div>
            </div>
        </main>
    `;
}
