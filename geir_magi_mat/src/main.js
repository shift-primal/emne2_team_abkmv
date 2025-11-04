import { updateView } from "./views/view.js";
import { switchPage } from "./controllers/PageController.js";
import { searchRecipes, selectRecipe } from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./controllers/PortionController.js";
import { handleToggleMenu } from "./controllers/NavMenuController.js";

window.switchPage = switchPage;
window.searchRecipes = searchRecipes;
window.decreasePortion = decreasePortion;
window.increasePortion = increasePortion;
window.searchRecipes = searchRecipes;
window.selectRecipe = selectRecipe;
window.handleToggleMenu = handleToggleMenu;

updateView();
