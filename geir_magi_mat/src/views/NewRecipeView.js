import {
    recipeData,
    addIngredient,
    addStep,
    updateRating,
    updateName,
    updateRegion,
    submitRecipe,
    clearRecipe,
} from "../controllers/NewRecipeController.js";
import { updateView } from "./view.js";

export function setupNewRecipePage() {
    setupNewRecipeEvents();
}

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

function handleAddStep(e) {
    e.preventDefault();

    const input = document.getElementById("steps-input");
    if (!input) return;

    const success = addStep(input.value);
    if (success) {
        input.value = "";
        updateView();
    }
}

function handleSliderChange(e) {
    updateRating(e.target.value);
    updateView();
}

function handleNameInput(e) {
    updateName(e.target.value);
}

function handleRegionChange(e) {
    updateRegion(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();

    const success = submitRecipe();
    if (success) {
        alert("Oppskrift lagret!");
        clearRecipe();
        updateView();
    }
}

export function setupNewRecipeEvents() {
    const addIngredientBtn = document.getElementById("add-ingredient-btn");
    const addStepBtn = document.getElementById("add-step-btn");
    const submitFormBtn = document.getElementById("submit-btn");
    const ratingSlider = document.getElementById("rating-slider");
    const nameInput = document.getElementById("name-input");
    const regionSelect = document.getElementById("region-select");

    if (addIngredientBtn) {
        addIngredientBtn.addEventListener("click", handleAddIngredient);
    }

    if (addStepBtn) {
        addStepBtn.addEventListener("click", handleAddStep);
    }

    if (submitFormBtn) {
        submitFormBtn.addEventListener("click", handleSubmit);
    }

    if (ratingSlider) {
        ratingSlider.addEventListener("change", handleSliderChange);
    }

    if (nameInput) {
        nameInput.addEventListener("input", handleNameInput);
    }

    if (regionSelect) {
        regionSelect.addEventListener("change", handleRegionChange);
    }
}

export function NewRecipeView() {
    return /* html */ `
        <main>
            <form id="recipe-form">
                <h1>Legg til ny oppskrift</h1>

                <div class="inputs">
                    <div class="form-group">
                        <label for="name-input">Navn:</label>
                        <input
                            id="name-input"
                            name="name"
                            type="text"
                            placeholder="Taco..."
                            value="${recipeData.name}"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="ingredients-input">Legg til ingrediens:</label>
                        <div class="input-with-button">
                            <input
                                id="ingredients-input"
                                name="ingredient"
                                type="text"
                                placeholder="Løk..."
                            />
                            <button type="button" id="add-ingredient-btn">Legg til</button>
                        </div>
                        <ul id="ingredients-list">
                            ${recipeData.ingredients
                                .map((ingredient) => {
                                    return /* html */ ` <li>${ingredient}</li> `;
                                })
                                .join("")}
                        </ul>
                    </div>

                    <div class="form-group">
                        <label for="steps-input">Legg til steg:</label>
                        <div class="input-with-button">
                            <input
                                id="steps-input"
                                name="step"
                                type="text"
                                placeholder="Stek kjøttdeig..."
                            />
                            <button type="button" id="add-step-btn">Legg til</button>
                        </div>
                        <ol id="steps-list">
                            ${recipeData.steps
                                .map((step) => {
                                    return /* html */ ` <li>${step}</li> `;
                                })
                                .join("")}
                        </ol>
                    </div>

                    <div class="form-group">
                        <label for="region-select">Region:</label>
                        <select name="region" id="region-select" required>
                            <option value="">Velg en region...</option>
                            <option
                                value="italia"
                                ${recipeData.region === "italia" ? "selected" : ""}
                            >
                                Italia
                            </option>
                            <option
                                value="mexico"
                                ${recipeData.region === "mexico" ? "selected" : ""}
                            >
                                Mexico
                            </option>
                            <option value="asia" ${recipeData.region === "asia" ? "selected" : ""}>
                                Asia
                            </option>
                            <option
                                value="norge"
                                ${recipeData.region === "norge" ? "selected" : ""}
                            >
                                Norge
                            </option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="rating-slider">
                            Rating:
                            <span id="rating-value">${recipeData.rating}</span>
                            /5
                        </label>
                        <input
                            id="rating-slider"
                            name="rating"
                            min="0"
                            max="5"
                            step="1"
                            type="range"
                            value="${recipeData.rating}"
                        />
                    </div>

                    <button type="button" id="submit-btn">Lagre oppskrift</button>
                </div>
            </form>
        </main>
    `;
}
