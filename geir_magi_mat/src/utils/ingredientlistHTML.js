const ingredientsListHtml = (recipe) => {
    return recipe.ingredients
        .map((ingredient) => {
            return /* html */ `
                <li>${ingredient.ingredient} - ${ingredient.amount} ${ingredient.metric}</li>
            `;
        })
        .join("");
};
