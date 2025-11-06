import { formatNameToId } from "../../utils/format.js";

export function MyRecipeCard(recipe, recipeIdx) {
    const id = formatNameToId(recipe.name);

    return /* html */ `
        <div class="myRecipeCard" id="${id}" onclick="selectRecipe(${recipeIdx})">
            <div class="myRecipeCardImgBox">
                <img class="myRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            </div>
            <div class="text-section">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>

                <h5>Rating: ${recipe.rating}/5 ★</h5>
            </div>
            <div class="myCardBtns">
                <div onclick="event.stopPropagation(); removeMyRecipe(${recipeIdx})" class="removeBtn">X</div>
                <img onclick="event.stopPropagation(); editMyRecipe(${recipeIdx})" class="editBtn" src="assets/app-img/edit.png" />
            </div>
        </div>
    `;
}
    