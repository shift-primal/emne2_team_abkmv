import { model } from "../models/index.js";
import { findRecipeByName } from "../utils/filter.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";
import { updateView } from "./view.js";

function searchRecipes() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = model.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput)
    );
    model.app.filteredRecipes = filteredRecipes;
    updateView();
}

export function MyRecipesView() {
	return /*HTML*/ `<div class="my-recipes-view">
        <div class="hero-section">
            <h2>Mine oppskrifter</h2>
            <div class="search-container">
                <input type="text" id="search-bar" class="search-bar" placeholder="Søk oppskrifter...">
                <button class="search-btn" onclick="searchRecipes()">🔍︎</button>
            </div>
                <div class="recipesContainer">    
                    ${model.recipes.map((recipe) => {
                    return `
                        <div class="recipeCard-group">${MyRecipeCard(recipe)}</div>`;
                            }).join('')}
                </div>
        </div>
            <div class="btn-group2">
                <button onclick="switchPage('NewRecipe')" class="addRecipeBtn">Legg til oppskrift</button>
                <button class="recommendRecipeBtn">Anbefal oppskrift</button>
            </div>
    </div>`;
}
