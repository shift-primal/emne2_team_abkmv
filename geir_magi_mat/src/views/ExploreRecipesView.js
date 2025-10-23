import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { RecipeCard } from "./components/RecipeCard.js";

export function ExploreRecipesView() {
	return /*HTML*/ `<div class="explore-recipes">
		<div class="hero-section">
			<h2>Utforsk oppskrifter</h2>
				<div class="hero-section"></div>
          		${getRecipePage()}
        		${pageButtons()}
		</div>
	</div>`;
}

export function getRecipePage() {
	return /*HTML*/ `
			<div class="recipeCard-group">${RecipeCard(findRecipeByName(model.recipes, "lasagne"))}</div>
			<div class="recipeCard-group">${RecipeCard(findRecipeByName(model.recipes, "lasagne"))}</div>
		`;
}

function pageButtons() {
	return /*HTML*/ `
     <div class="page-buttons">
          <button onclick="previousPage()">Previous</button>
          <button onclick="nextPage()">Next</button>
     </div>
`;
}
