import { model } from "../models/index.js";
import { RecipeCard } from "./components/RecipeCard.js";
import { switchPage } from "../controllers/PageController.js";
import { findRecipeByName } from "../utils/filter.js";

export function FrontPageView() {
    const html = /* html */ `
        <main>
            <div class="hero-section">
                <h1>Middags-Magi</h1>
                <h2>Inspirasjon til middagslaging</h2>
                <div class="btn-group">
                    <button onclick="switchPage('ExploreRecipes')" class="btn btn-primary">
                        Utforsk oppskrifter
                    </button>
                    <button onclick="switchPage('MyRecipes')" class="btn btn-secondary">
                        Mine oppskrifter
                    </button>
                </div>
                <h2>Utforsk oppskrifter</h2>
                <div class="recipeCard-group">
                    ${RecipeCard(findRecipeByName(model.recipes, "Lasagne"))}
                    ${RecipeCard(findRecipeByName(model.recipes, "Kylling Tikka Masala"))}
                </div>
            </div>
        </main>
    `;
    return html;
}
