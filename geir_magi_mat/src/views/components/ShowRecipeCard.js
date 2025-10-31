import { formatNameToId } from "../../utils/format.js";

export function ShowRecipeCard(recipe) {
    return /* html */ `
        <div class="showRecipeCard" id="${formatNameToId(recipe.name)}">
            <div class="showRecipeText">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>
            </div>
            <img class="showRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
        </div>
    `;
}
