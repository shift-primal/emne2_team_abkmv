import { searchRecipes, selectRecipe, editMyRecipe } from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./controllers/PortionController.js";
import { handleToggleMenu } from "./controllers/NavMenuController.js";
import { removeMyRecipe } from "./controllers/MyRecipesController.js";
import {
    updateRatingDisplay,
    saveRecipe,
    cancelEdit,
    addNewIngredient,
    addNewStep,
} from "./controllers/EditRecipeController.js";
import { searchRecipes, selectRecipe } from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./controllers/PortionController.js";
import { handleToggleMenu } from "./controllers/NavMenuController.js";
import { initRouter, navigate } from "./router.js";

window.navigate = navigate;

window.searchRecipes = searchRecipes;
window.decreasePortion = decreasePortion;
window.increasePortion = increasePortion;
window.searchRecipes = searchRecipes;
window.selectRecipe = selectRecipe;
window.handleToggleMenu = handleToggleMenu;
window.removeMyRecipe = removeMyRecipe;
window.editMyRecipe = editMyRecipe;
window.updateRatingDisplay = updateRatingDisplay;
window.saveRecipe = saveRecipe;
window.cancelEdit = cancelEdit;
window.addNewIngredient = addNewIngredient;
window.addNewStep = addNewStep;

initRouter();
