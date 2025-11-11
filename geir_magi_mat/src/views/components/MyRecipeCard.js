export function MyRecipeCard(recipe, recipeIdx) {
    return /* html */ `
        <a class="myRecipeCard" href="/recipe/${recipe.id}" data-link>
            <div class="myRecipeCardImgBox">
                <img class="myRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            </div>
            <div class="text-section">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>

                <h5>Rating: ${recipe.rating}/5 ★</h5>
            </div>
            <div class="myCardBtns">
                <div
                    class="removeBtn"
                    onclick="event.preventDefault(); event.stopPropagation(); removeMyRecipe(${recipeIdx})"
                >
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div
                    class="editBtn"
                    onclick="event.preventDefault(); event.stopPropagation(); editMyRecipe(${recipeIdx})"
                >
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
            </div>
        </a>
    `;
}
