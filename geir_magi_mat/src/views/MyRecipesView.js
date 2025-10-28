import { model } from "../models/index.js";
import { MyRecipeCard } from "./components/MyRecipeCard.js";

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
