import { model } from "../models/index.js";
import { updateView } from "../views/view.js";

export function updateRatingDisplay(value) {
    const ratingDisplay = document.getElementById('rating-display');
    if (ratingDisplay) {
        ratingDisplay.textContent = `${value}/5`;
    }
}

export function saveRecipe() {
    const recipe = model.app.selectedRecipe;
    if (!recipe) return;

    // Collect form data
    const name = document.getElementById('recipe-name').value.trim();
    const region = document.getElementById('recipe-region').value;
    const description = document.getElementById('recipe-description').value.trim();
    const portions = parseInt(document.getElementById('recipe-portions').value) || recipe.portionSize;
    const rating = parseFloat(document.querySelector('.rating-slider').value) || recipe.rating;

    // Collect ingredients
    const ingredientItems = document.querySelectorAll('.ingredient-item');
    const ingredients = [];
    ingredientItems.forEach(item => {
        const ingredient = item.querySelector('input[type="text"]:nth-child(1)').value.trim();
        const amount = parseFloat(item.querySelector('input[type="number"]').value) || null;
        const metric = item.querySelector('input[type="text"]:nth-child(3)').value.trim();
        if (ingredient) {
            ingredients.push({ ingredient, amount, metric });
        }
    });

    // Collect steps
    const stepItems = document.querySelectorAll('.step-item textarea');
    const recipeSteps = [];
    stepItems.forEach(textarea => {
        const step = textarea.value.trim();
        if (step) {
            recipeSteps.push(step);
        }
    });

    // Update the recipe object
    recipe.name = name;
    recipe.region = region;
    recipe.description = description;
    recipe.portionSize = portions;
    recipe.rating = rating;
    recipe.ingredients = ingredients;
    recipe.recipeSteps = recipeSteps;

    // Find and update in the model
    const index = model.recipes.findIndex(r => r.id === recipe.id);
    if (index !== -1) {
        model.recipes[index] = recipe;
    }

    // Navigate to MyRecipes
    model.app.currentPage = 'MyRecipes';
    updateView();
}

export function cancelEdit() {
    // Navigate back to MyRecipes without saving
    model.app.currentPage = 'MyRecipes';
    updateView();
}

export function addNewIngredient() {
    const ingredientsContainer = document.querySelector('.form-group:has(.ingredient-item)');
    if (!ingredientsContainer) return;

    const newIngredient = document.createElement('div');
    newIngredient.className = 'ingredient-item';
    newIngredient.innerHTML = `
        <input type="text" placeholder="Ingrediens" />
        <input type="number" placeholder="Mengde" style="width: 80px" />
        <input type="text" placeholder="Måleenhet" style="width: 80px" />
    `;
    ingredientsContainer.insertBefore(newIngredient, ingredientsContainer.lastElementChild);
}

export function addNewStep() {
    const stepsContainer = document.querySelector('.form-group:has(.step-item)');
    if (!stepsContainer) return;

    const newStep = document.createElement('div');
    newStep.className = 'step-item';
    newStep.innerHTML = `<textarea placeholder="Skriv her"></textarea>`;
    stepsContainer.insertBefore(newStep, stepsContainer.lastElementChild);
}
