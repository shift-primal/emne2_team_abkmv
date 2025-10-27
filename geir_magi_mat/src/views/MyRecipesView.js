import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";

export function MyRecipesView() {
	return /*HTML*/ `<div class="my-recipes-view">
        <div class="hero-section">
            <h2>Mine oppskrifter</h2>
                <div class="recipesContainer">    
                ${model.recipes.map((recipe) => {
                                        return `
                                                        <div class="recipeCard-group">${MyRecipeCard(recipe)}</div>`;
                                    }).join('')}
                </div>
        </div>
            <button onclick="switchPage('NewRecipe')" class="addRecipeBtn">Legg til oppskrift</button>
            <button class="recommendRecipeBtn">Anbefal oppskrift</button>
            <div class="search-container">
                <input type="text" class="search-bar" placeholder="Søk oppskrifter...">
                <button class="search-btn" onclick="searchRecipes()">🔍︎</button>
            </div>
    </div>`;
}
