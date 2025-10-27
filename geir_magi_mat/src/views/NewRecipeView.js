import { addedIngredients, addedSteps, ratingValue } from "../controllers/NewRecipeController.js";

export function NewRecipeView() {
	return /*HTML*/ `
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
						>
							Legg til
						</button>
					</div>
					<ul id="ingredients-list">
					${addedIngredients
						.map((ingredient) => {
							return /* HTML */ `<li>${ingredient}</li>`;
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
						<button
							type="button"
							id="add-step-btn"
						>
							Legg til
						</button>
					</div>
					<ol id="steps-list">
					
					${addedSteps
						.map((step) => {
							return /* HTML */ `<li>${step}</li>`;
						})
						.join("")}
				</ol>
				</div>

				<div class="form-group">
					<label for="region-select">Region:</label>
					<select
						name="region"
						id="region-select"
						required
					>
						<option value="">Velg en region...</option>
						<option value="italia">Italia</option>
						<option value="mexico">Mexico</option>
						<option value="asia">Asia</option>
						<option value="norge">Norge</option>
					</select>
				</div>

				<div class="form-group">
					<label for="rating-slider">
						Rating: <span id="rating-value">${ratingValue}</span>/5
					</label>
					<input
						id="rating-slider"
						name="rating"
						min="0"
						max="5"
						step="1"
						type="range"
						value="${ratingValue}"
					/>
				</div>

				<button
					type="button"
					id="submit-btn"
				>
					Lagre oppskrift
				</button>
			</div>
		</form>
	</main>`;
}
