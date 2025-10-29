import { model } from "../models/index.js";
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
    return /* html */ `
        <main>
            <div class="heading">
                <h2>Mine oppskrifter</h2>
                <button onclick="switchPage('NewRecipe')" class="primary">+</button>
            </div>
            <div class="recipeCard-group">
                ${model.recipes.map((recipe) => `${MyRecipeCard(recipe)}`).join("")}
            </div>
        </main>
    `;
}
