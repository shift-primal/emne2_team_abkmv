import { model } from "../models/index.js";
import { RecipeCard } from "./components/RecipeCard.js";
import { switchPage } from "../controllers/PageController.js";
import { findRecipeByName } from "../utils/filter.js";

export function FrontPageView() {
	const html = /* HTML */ `<div class="front-page">
		<div class="hero-section">
			<h1>Middags-Magi</h1>
			<h2>Inspirasjon til middagslaging</h2>
			<div class="btn-group">
				<button
					onclick="switchPage('ExploreRecipes')"
					class="primary"
				>
					Utforsk oppskrifter
				</button>
				<button
					onclick="switchPage('MyRecipes')" 
					class="secondary">
					Mine oppskrifter
				</button>
			</div>
			<h2>Utforsk oppskrifter</h2>
			<div class="hero-section"></div>
			<div class="recipeCard-group">${RecipeCard(findRecipeByName(model.recipes, "Lasagne"))}</div>
			<div class="recipeCard-group">${RecipeCard(findRecipeByName(model.recipes, "Kylling Tikka Masala"))}</div>
		</div>
	</div>`;
	return html;
}
