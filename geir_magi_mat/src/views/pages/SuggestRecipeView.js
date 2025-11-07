import { model } from "../../models/index.js";
import { PortionCalculator } from "../components/PortionCalculator.js";

export function SuggestRecipeView() {
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
                            <button
                                type="button"
                                id="add-ingredient-btn"
                                class="btn btn-sq btn-success"
                            >
                                +
                            </button>
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
                            <button type="button" id="add-step-btn" class="btn btn-sq btn-success">
                                +
                            </button>
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

                    <button type="button" id="submit-btn" class="btn btn-success">
                        Lagre oppskrift
                    </button>
                </div>
            </form>
        </main>
    `;
}
