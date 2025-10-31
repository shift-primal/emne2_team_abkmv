import { model } from "../models/index.js";

export function FullRecipeView() {
    const recipe = model.recipes[7];

    console.log(recipe);

    return /* html */ `
        <main id="full-recipe">
            <h1>${recipe.name}</h1>
            <div class="img-container">
                <img src="${recipe.imgUrl}" alt="${recipe.alt}" />
            </div>
            <div id="ingredients">
                <ul>
                    ${recipe.ingredients
                        .map((ingredient) => {
                            return /* html */ `
                                <li>
                                    ${ingredient.ingredient} -
                                    ${ingredient.amount}${ingredient.metric}
                                </li>
                            `;
                        })
                        .join("")}
                </ul>
            </div>
        </main>
    `;
}
