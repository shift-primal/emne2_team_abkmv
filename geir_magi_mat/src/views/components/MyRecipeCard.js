import { formatNameToId } from "../../utils/format.js";

export function MyRecipeCard(recipe) {
    const id = formatNameToId(recipe.name);

    return /* html */ `
        <a class="myRecipeCard" href="/recipe/${id}" data-link>
            <div class="myRecipeCardImgBox">
                <img class="myRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            </div>
            <div class="text-section">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>

                <h5>Rating: ${recipe.rating}/5 ★</h5>
            </div>
            <div class="myCardBtns">
                <div class="removeBtn">X</div>
                <img class="editBtn" src="assets/app-img/edit.png" />
            </div>
        </a>
    `;
}
