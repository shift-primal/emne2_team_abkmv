import { model } from "../models/index.js";
import { updateView } from "../views/view.js";
import {
    searchRecipes,
    removeMyRecipe,
    editMyRecipe,
    setSelectedRecipe,
} from "./MyRecipesController.js";
import { decreasePortion, increasePortion } from "./PortionController.js";
import {
    cancelEdit,
    saveRecipe,
    updateRatingDisplay,
    addNewIngredient,
    addNewStep,
} from "./EditRecipeController.js";
import { handleToggleMenu } from "./NavMenuController.js";
import { findRecipes } from "./SuggestRecipeController.js";
import { formatNameToId } from "../utils/format.js";

export function switchPage(newPage, data = null) {
    model.app.currentPage = newPage;
    if (newPage === "ShowRecipe" && data) {
        const originalRecipe = model.recipes.find((recipe) => formatNameToId(recipe.name) === data);
        model.app.selectedRecipe = { ...originalRecipe };
    }
    updateView();
}

function handleAction(e) {
    const target = e.target.closest("[data-action]");
    console.log(e.target.dataset)
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
        case "select-recipe":
            e.preventDefault();
            setSelectedRecipe(target.dataset.recipeIdx);
            break;
        case "search-recipes":
            searchRecipes();
            break;
        case "new-recipe":
            switchPage("NewRecipe");
            break;
        case "remove-recipe":
            e.preventDefault();
            e.stopPropagation();
            removeMyRecipe(target.dataset.recipeIdx);
            break;
        case "edit-recipe":
            e.preventDefault();
            e.stopPropagation();
            editMyRecipe(target.dataset.recipeIdx);
            break;
        case "decrease-portion":
            decreasePortion();
            break;
        case "increase-portion":
            increasePortion();
            break;
        case "update-rating-display":
            updateRatingDisplay(e.target.value);
            break;
        case "add-new-ingredient":
            addNewIngredient();
            break;
        case "add-new-step":
            addNewStep();
            break;
        case "save-recipe":
            saveRecipe();
            break;
        case "cancel-edit":
            cancelEdit();
            break;
        case "toggle-menu":
            handleToggleMenu();
            break;
        case "find-recipes":
            findRecipes();
            break;
    }
}

export function initPageController() {
    const app = document.getElementById("app");
    app.addEventListener("click", handleAction);
    app.addEventListener("input", handleAction);
}