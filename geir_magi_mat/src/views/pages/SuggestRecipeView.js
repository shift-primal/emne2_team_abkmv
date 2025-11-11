import {
    suggestionState,
    addIngredient,
    findRecipes,
} from "../../controllers/SuggestRecipeController.js";
import { RecipeCard } from "../components/RecipeCard.js";
import { updateView } from "../view.js";

function handleAddIngredient(e) {
    e.preventDefault();

    const input = document.getElementById("ingredients-input");
    if (!input) return;

    const success = addIngredient(input.value);
    if (success) {
        input.value = "";
        updateView();
    }
}

export function setupSuggestRecipePage() {
    const findRecipeBtn = document.getElementById("find-recipe-btn");
    const addIngredientBtn = document.getElementById("add-ingredient-btn");

    if (findRecipeBtn) {
        findRecipeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            findRecipes();
        });
    }

    if (addIngredientBtn) {
        addIngredientBtn.addEventListener("click", handleAddIngredient);
    }
}

export function SuggestRecipeView() {
    return /* html */ `
        <main>
            <form id="suggest-recipe-form">
                <h1>Anbefal oppskrift</h1>
                <div class="form-group">
                    <label for="ingredients-input">Legg til ingrediens:</label>
                    <div class="input-with-button">
                        <input
                            id="ingredients-input"
                            name="ingredient"
                            type="text"
                            placeholder="Løk..."
                        />
                        <button
                            type="button"
                            id="add-ingredient-btn"
                            class="btn btn-sq btn-success"
                        >
                            +
                        </button>
                    </div>
                    <ul id="ingredients-list">
                        ${suggestionState.ingredients
                            .map((ingredient) => {
                                return /* html */ ` <li>${ingredient}</li> `;
                            })
                            .join("")}
                    </ul>
                </div>
                <button type="button" id="find-recipe-btn" class="btn btn-primary">
                    Finn oppskrift
                </button>
            </form>

            <div id="suggested-recipes" class="recipe-grid">
                ${
                    suggestionState.foundRecipes.length > 0
                        ? suggestionState.foundRecipes.map(RecipeCard).join("")
                        : "<p>Ingen oppskrifter funnet.</p>"
                }
            </div>
        </main>
    `;
}
