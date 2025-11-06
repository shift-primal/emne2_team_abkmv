import { formatNameToId } from "../../utils/format.js";

export function RecipeCard(recipe, recipeIdx) {
    const id = formatNameToId(recipe.name);

    return /* html */ `
        <div class="recipeCard"  id="${id}" onclick="selectRecipe(${id})">
            <img class="recipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            <h4>${recipe.name}</h4>
            <h5>${recipe.description}</h5>
        </div>
    `;
}
