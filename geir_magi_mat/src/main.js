import { navigate, initRouter } from "./router.js";
import { handleToggleMenu } from "./controllers/NavMenuController.js";
import {
    searchRecipes,
    selectRecipe,
    removeMyRecipe,
    editMyRecipe,
} from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./controllers/PortionController.js";
import {
    cancelEdit,
    saveRecipe,
    updateRatingDisplay,
    addNewIngredient,
    addNewStep,
} from "./controllers/EditRecipeController.js";

window.navigate = navigate;
window.handleToggleMenu = handleToggleMenu;

window.searchRecipes = searchRecipes;
window.decreasePortion = decreasePortion;
window.increasePortion = increasePortion;
window.selectRecipe = selectRecipe;

window.removeMyRecipe = removeMyRecipe;
window.editMyRecipe = editMyRecipe;

window.cancelEdit = cancelEdit;
window.saveRecipe = saveRecipe;

window.updateRatingDisplay = updateRatingDisplay;
window.addNewIngredient = addNewIngredient;
window.addNewStep = addNewStep;

initRouter();
