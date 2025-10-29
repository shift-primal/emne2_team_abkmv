import { formatNameToId } from "../../utils/format.js";

export function RecipeCard(recipe) {
    return /* html */ `
        <div class="recipeCard" id="${formatNameToId(recipe.name)}">
            <img class="recipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            <h4>${recipe.name}</h4>
            <h5>${recipe.description}</h5>
        </div>
    `;
}
