import { formatNameToId } from "../../utils/format.js";

export function MyRecipeCard(recipe) {
    return /* html */ `
        <div class="myRecipeCard" id="${formatNameToId(recipe.name)}">
            <img class="myRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            <div class="text-section">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>

                <h5>Rating: ${recipe.rating}/5 ★</h5>
            </div>
        </div>
    `;
}
