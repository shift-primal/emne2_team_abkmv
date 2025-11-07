import { model } from "../../models/index.js";
import { PortionCalculator } from "../components/PortionCalculator.js";

export function FullRecipeView() {
    const originalRecipe = model.app.selectedRecipe;

    if (!originalRecipe) {
        return /* html */ `<div>No recipe selected</div>`;
    }

    if (model.app.adjustedPortionSize === null) {
        model.app.adjustedPortionSize = originalRecipe.portionSize;
    }

    const adjustedPortionSize = model.app.adjustedPortionSize;

    function generateStars(rating) {
        let currRating = rating;
        const ratingArr = [];

        const stars = {
            filledStar: '<i class="fa-solid fa-star"></i>',
            emptyStar: '<i class="fa-regular fa-star"></i>',
            halfStar: '<i class="fa-solid fa-star-half-stroke"></i>',
        };

        while (currRating > 0) {
            if (currRating < 1) {
                ratingArr.push(stars.halfStar);
                break;
            }

            ratingArr.push(stars.filledStar);
            currRating -= 1;
        }

        while (ratingArr.length < 5) {
            ratingArr.push(stars.emptyStar);
        }

        return ratingArr.join("");
    }

    return /* html */ `
        <main id="full-recipe">
            <h1>${originalRecipe.name}</h1>
            <div class="img-container">
                <img src="${originalRecipe.imgUrl}" alt="${originalRecipe.alt}" />
            </div>
            <div id="recipe-heading">
                <h1 id="recipe-description">${originalRecipe.description}</h1>
                <h2 id="recipe-comment">${originalRecipe.comment}</h2>
                <div id="recipe-rating">${generateStars(originalRecipe.rating)}</div>
            </div>
            <div id="lists">
                <div id="ingredients">
                    ${PortionCalculator(adjustedPortionSize)}
                    ${originalRecipe.ingredients
                        .map((ing) => {
                            const factor = adjustedPortionSize / originalRecipe.portionSize;
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
                        ${originalRecipe.recipeSteps
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
