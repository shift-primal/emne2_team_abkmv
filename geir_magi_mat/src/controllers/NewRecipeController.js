import { updateView } from "../views/view.js";

export const addedIngredients = [];
export const addedSteps = [];
export let ratingValue = 0;

let formState = {};

export function setupNewRecipePage() {
	setupNewRecipeEvents();
	restoreFormState();
}

function saveFormState() {
	const form = document.getElementById("recipe-form");
	if (form) {
		const inputs = form.querySelectorAll("input, select, range");
		inputs.forEach((input) => {
			if (input.id || input.name) {
				formState[input.id || input.name] = input.value;
			}
		});
	}
}

function restoreFormState() {
	Object.entries(formState).forEach(([key, value]) => {
		const input = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
		if (input) input.value = value;
	});
}

function addIngredient(e) {
	e.preventDefault();

	const input = document.getElementById("ingredients-input");

	if (!input || !input.value.trim()) {
		return;
	}

	saveFormState();
	addedIngredients.push(input.value);
	updateView();
}

function addStep(e) {
	e.preventDefault();

	const input = document.getElementById("steps-input");

	if (!input || !input.value.trim()) {
		return;
	}

	addedSteps.push(input.value);

	updateView();
}

function handleSlider(e) {
	e.preventDefault();

	saveFormState();
	ratingValue = e.target.value;
	updateView();
}

function submitForm(e) {
	e.preventDefault();

	const formElement = document.getElementById("recipe-form");
	const formData = new FormData(formElement);
	const dataObject = Object.fromEntries(formData.entries());

	console.log(dataObject);
}

export function setupNewRecipeEvents() {
	const addIngredientBtn = document.getElementById("add-ingredient-btn");
	const addStepBtn = document.getElementById("add-step-btn");
	const submitFormBtn = document.getElementById("submit-btn");
	const ratingSlider = document.getElementById("rating-slider");

	if (addIngredientBtn) {
		addIngredientBtn.addEventListener("click", (e) => {
			addIngredient(e);
		});
	}

	if (addStepBtn) {
		addStepBtn.addEventListener("click", (e) => {
			addStep(e);
		});
	}

	if (submitFormBtn) {
		submitFormBtn.addEventListener("click", (e) => {
			submitForm(e);
		});
	}

	if (ratingSlider) {
		ratingSlider.addEventListener("change", (e) => {
			handleSlider(e);
		});
	}
}
