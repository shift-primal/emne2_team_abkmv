function exploreRecipesView() {
	return /*HTML*/ `<div class="explore-recipes">
	<div class="hero-section">
		<h2>Utforsk oppskrifter</h2>
		<div class="hero-section"></div>
          ${getRecipePage()}
          ${pageButtons()}
	</div>
</div>`;
}

function getRecipePage() {
	if (recipes.currentRecipePage === 1) {
		return /*HTML*/ `
			<div class="recipeCard-group">${generateRecipeCard("lasagne")}</div>
			<div class="recipeCard-group">${generateRecipeCard("Kylling Tikka Masala")}</div>
			<div class="recipeCard-group">${generateRecipeCard("Taco")}</div>
		`;
	} else if (recipes.currentRecipePage === 2) {
		return /*HTML*/ `
			<!-- Sett inn oppskrifter her -->
		`;
	}
	return '';
}


function pageButtons() {
     return /*HTML*/ `
     <div class="page-buttons">
          <button onclick="previousPage()">Previous</button>
          <button onclick="nextPage()">Next</button>
     </div>
`;
}

function previousPage() {
	if (recipes.currentRecipePage > 1) {
		recipes.currentRecipePage--;
		updateView();
	}
}

function nextPage() {
	if (recipes.currentRecipePage < 2) {
		recipes.currentRecipePage++;
		updateView();
	}
}
