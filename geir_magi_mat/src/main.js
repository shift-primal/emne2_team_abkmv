import { navigate, initRouter } from "./router.js";
import { initPageController, switchPage } from "./controllers/PageController.js";
import { selectRecipe, removeMyRecipe, editMyRecipe, searchRecipes } from "./controllers/MyRecipesController.js";
import { saveRecipe, cancelEdit, updateRatingDisplay, addNewIngredient, addNewStep } from "./controllers/EditRecipeController.js";

window.navigate = navigate;
window.switchPage = switchPage;
window.selectRecipe = selectRecipe;
window.removeMyRecipe = removeMyRecipe;
window.editMyRecipe = editMyRecipe;
window.searchRecipes = searchRecipes;
window.saveRecipe = saveRecipe;
window.cancelEdit = cancelEdit;
window.updateRatingDisplay = updateRatingDisplay;
window.addNewIngredient = addNewIngredient;
window.addNewStep = addNewStep;

initRouter();
initPageController();
