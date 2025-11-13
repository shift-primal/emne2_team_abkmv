import { model } from "../models/index.js";
import { switchPage } from "./PageController.js";

// form data
export const recipeData = {
    name: "",
    region: "",
    ingredients: [],
    steps: [],
    rating: 0,
};

export function addIngredient(ingredientText) {
    if (!ingredientText || !ingredientText.trim()) {
        return false;
    }
    recipeData.ingredients.push(ingredientText.trim());
    return true;
}

export function addStep(stepText) {
    if (!stepText || !stepText.trim()) {
        return false;
    }
    recipeData.steps.push(stepText.trim());
    return true;
}

export function updateRating(value) {
    recipeData.rating = parseInt(value);
}

export function updateName(name) {
    recipeData.name = name;
}

export function updateRegion(region) {
    recipeData.region = region;
}

export function submitRecipe() {
    if (!recipeData.name.trim()) {
        console.error("Recipe name is required");
        return false;
    }

    if (!recipeData.region) {
        console.error("Region is required");
        return false;
    }

    // Generate new ID (max existing ID + 1)
    const maxId = model.recipes.reduce((max, r) => Math.max(max, r.id), 0);
    const newId = maxId + 1;

    // Get current date in YYYY-MM-DD format
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];

    const recipe = {
        id: newId,
        date: dateStr,
        name: recipeData.name,
        region: recipeData.region,
        imgUrl: "/assets/recipe-imgs/default.jpg",
        alt: `Bilde av ${recipeData.name}`,
        rating: recipeData.rating,
        comment: "",
        portionSize: 4,
        description: "",
        ingredients: recipeData.ingredients.map(ing => ({
            ingredient: ing,
            amount: null,
            metric: "stk"
        })),
        recipeSteps: recipeData.steps,
    };

    model.recipes.push(recipe);
    console.log("recipe submitted:", recipe);
    switchPage("MyRecipes");
    return true;
}

export function clearRecipe() {
    recipeData.name = "";
    recipeData.region = "";
    recipeData.ingredients = [];
    recipeData.steps = [];
    recipeData.rating = 0;
}
