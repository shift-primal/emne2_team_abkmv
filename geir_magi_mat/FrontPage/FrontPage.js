const html = /* HTML */ `<div class="front-page">
	<div class="hero-section">
		<h1>Middags-Magi</h1>
		<h2>Inspirasjon til middagslaging</h2>
		<div class="btn-group">
			<button class="primary">Utforsk oppskrifter</button>
			<button class="secondary">Mine oppskrifter</button>
		</div>
		<h2>Utforsk oppskrifter</h2>
		<div class="hero-section"></div>
		<div class="recipeCard-group">${generateRecipeCard("lasagne")}</div>
	</div>
</div>`;

function frontPageView() {
	return html;
}

function findRecipeByName(name) {
	return recipes.find((r) => r.name.toLowerCase() === name.toLowerCase());
}

function generateRecipeCard(dishName) {
	const recipe = findRecipeByName(dishName);

	return /* HTML */ ` <div class="recipeCard">
		<h3>${recipe.name}</h3>
		<img alt="${recipe.alt}" src="${recipe.imgUrl}">
	</div>`;
}
