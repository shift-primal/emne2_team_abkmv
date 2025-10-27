export function MyRecipeCard(recipe) {
	const ingredientsFormatted = recipe.ingredients.map(ing => `${ing.ingredient}: ${ing.amount} ${ing.metric}`).join(' ');
	return /* HTML */ ` <div class="myRecipeCard">
		<img
			class="myRecipeCardImg"
			alt="${recipe.alt}"
			src="${recipe.imgUrl}"
		/>
		<div class="text-section">
			<h3>${recipe.name}</h3>
			<h4>${recipe.region}</h4>
			<h5>${ingredientsFormatted}</h5>
			<h5>Rating: ${recipe.rating}/5 ★</h5>
		</div>
	</div>`;
}
