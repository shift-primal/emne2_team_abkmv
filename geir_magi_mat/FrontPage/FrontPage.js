const html = /* HTML */ `<div class="front-page">
	<div class="hero-section">
		<h1>Middags-Magi</h1>
		<h2>Inspirasjon til middagslaging</h2>
		<div class="btn-group">
			<button
currentPswitchPage('exploreRecipes')				onclick="switchPage('exploreRecipes')"
				class="primary"
			>
				Utforsk oppskrifter
			</button>
			<button class="secondary">Mine oppskrifter</button>
		</div>
		<h2>Utforsk oppskrifter</h2>
		<div class="hero-section"></div>
		<div class="recipeCard-group">${generateRecipeCard("lasagne")}</div>
		<div class="recipeCard-group">${generateRecipeCard("Kylling Tikka Masala")}</div>
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
		<img
			class="recipeCardImg"
			alt="${recipe.alt}"
			src="${recipe.imgUrl}"
		/>
		<h4>${recipe.name}</h4>
		<h5>${recipe.description}</h5>
	</div>`;
}
