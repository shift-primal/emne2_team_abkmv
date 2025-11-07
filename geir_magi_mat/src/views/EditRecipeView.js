import { model } from "../models/index.js";
import { updateView } from "./view.js";

export function editRecipeView() {
    const recipe = model.app.selectedRecipe;
    if (!recipe) return /* html */ `<div>No recipe selected</div>`;

    return /* html */ `
        <div class="edit-recipe">
            <h2>Endre oppskrift: ${recipe.name}</h2>
            <form class="edit-recipe-form">
                <div class="form-group">
                    <label for="recipe-name">Navn:</label>
                    <input type="text" id="recipe-name" value="${recipe.name}" />
                </div>

                <div class="form-group">
                    <label for="recipe-region">Region:</label>
                    <select id="recipe-region">
                        <option value="italia" ${recipe.region === "Italia" ? "selected" : ""}>
                            Italia
                        </option>
                        <option value="mexico" ${recipe.region === "Mexico" ? "selected" : ""}>
                            Mexico
                        </option>
                        <option value="asia" ${recipe.region === "Asia" ? "selected" : ""}>
                            Asia
                        </option>
                        <option value="norge" ${recipe.region === "Norge" ? "selected" : ""}>
                            Norge
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="recipe-description">Deskripsjon:</label>
                    <input type="text" id="recipe-description" value="${recipe.description}" />
                </div>

                <div class="form-group">
                    <label for="recipe-portions">Porsjoner:</label>
                    <input
                        type="number"
                        id="recipe-portions"
                        value="${recipe.portionSize}"
                        min="1"
                    />
                </div>

                <div class="form-group">
                    <label for="recipe-rating">Vurdering:</label>
                    <input
                        class="rating-slider"
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value="${recipe.rating}"
                        oninput="updateRatingDisplay(this.value)"
                    />
                    <span id="rating-display">${recipe.rating}/5</span>
                </div>

                <div class="form-group">
                    <label>Ingredienser:</label>
                    ${recipe.ingredients
                        .map(
                            (ing, index) => /* html */ `
                                <div class="ingredient-item">
                                    <input
                                        type="text"
                                        value="${ing.ingredient}"
                                        placeholder="Ingredient"
                                    />
                                    <input
                                        type="number"
                                        value="${ing.amount || ""}"
                                        placeholder="Amount"
                                        style="width: 80px"
                                    />
                                    <input
                                        type="text"
                                        value="${ing.metric}"
                                        placeholder="Unit"
                                        style="width: 80px"
                                    />
                                </div>
                            `
                        )
                        .join("")}
                    <button type="button" class="btn btn-primary" onclick="addNewIngredient()">
                        Legg Til Ingrediens
                    </button>
                </div>

                <div class="form-group">
                    <label>Fremgangsmåte:</label>
                    ${recipe.recipeSteps
                        .map(
                            (step, index) => /* html */ `
                                <div class="step-item">
                                    <textarea>${step}</textarea>
                                </div>
                            `
                        )
                        .join("")}
                    <button type="button" class="btn btn-primary" onclick="addNewStep()">
                        Legg Til Steg
                    </button>
                </div>

                <div class="btn-group">
                    <button type="button" class="btn btn-primary" onclick="saveRecipe()">
                        Lagre
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="cancelEdit()">
                        Avbryt
                    </button>
                </div>
            </form>
        </div>
    `;
}
