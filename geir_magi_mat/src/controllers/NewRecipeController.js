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

    const recipe = {
        name: recipeData.name,
        region: recipeData.region,
        ingredients: recipeData.ingredients,
        steps: recipeData.steps,
        rating: recipeData.rating,
    };

    console.log("recipe submitted:", recipe);
    // TODO: save to  storage
    return true;
}

export function clearRecipe() {
    recipeData.name = "";
    recipeData.region = "";
    recipeData.ingredients = [];
    recipeData.steps = [];
    recipeData.rating = 0;
}
