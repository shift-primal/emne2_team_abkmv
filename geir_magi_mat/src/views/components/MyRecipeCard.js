export function MyRecipeCard(recipe) {
    const ingredientsFormatted = recipe.ingredients
        .map((ing) => `${ing.ingredient}: ${ing.amount} ${ing.metric}`)
        .join(", ");

    const formatNameToId = (name) => {
        return name.toLowerCase().split(" ").join("_").replace(/\W/g, "");
    };

    return /* html */ `
        <div class="myRecipeCard" id="${formatNameToId(recipe.name)}">
            <img class="myRecipeCardImg" alt="${recipe.alt}" src="${recipe.imgUrl}" />
            <div class="text-section">
                <h3>${recipe.name}</h3>
                <h4>${recipe.region}</h4>
                <h5>${ingredientsFormatted}</h5>
                <h5>Rating: ${recipe.rating}/5 ★</h5>
            </div>
        </div>
    `;
}
