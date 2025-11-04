import { updateView } from "./views/view.js";
import { switchPage } from "./controllers/PageController.js";
import { searchRecipes, selectRecipe } from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./controllers/PortionController.js";

window.switchPage = switchPage;
window.searchRecipes = searchRecipes;
window.decreasePortion = decreasePortion;
window.increasePortion = increasePortion;
window.selectRecipe = selectRecipe;

updateView();
