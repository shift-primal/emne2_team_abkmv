import { updateView } from "../views/view.js";
import { recipeModel } from "../models/RecipesModel.js";

export const suggestionState = {
    ingredients: [],
    foundRecipes: [],
};

export function addIngredient(ingredient) {
    if (!ingredient || !ingredient.trim()) {
        return false;
    }
    suggestionState.ingredients.push(ingredient.trim());
    return true;
}

export function findRecipes() {
    const ingredients = suggestionState.ingredients.map((i) =>
        i.trim().toLowerCase()
    );
    suggestionState.foundRecipes = suggestRecipes(ingredients);
    updateView();
}


export function suggestRecipes(ingredients) {
    const validIngredients = ingredients.filter((ing) => ing.trim() !== "");

    if (validIngredients.length === 0) {
        return [];
    }
    return recipeModel.filter((recipe) => {
        return validIngredients.every((userIngredient) => {
            return recipe.ingredients.some((recipeIngredient) =>
                recipeIngredient.ingredient.toLowerCase().includes(userIngredient.toLowerCase())
            );
        });
    });
}