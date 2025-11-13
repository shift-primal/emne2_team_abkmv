import { formatNameToId } from "../../utils/format.js";

export function RecipeCard(recipe) {
    if (!recipe) return "";
    const id = formatNameToId(recipe.name);
    return /* html */ `
        <a class="recipeCard" href="/recipe/${id}" data-link>
            <img class="recipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            <h4>${recipe.name}</h4>
            <h5>${recipe.description}</h5>
        </a>
    `;
}
