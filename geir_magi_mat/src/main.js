<<<<<<< Updated upstream
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
=======
import { navigate, initRouter } from "./router.js";
import { initPageController } from "./controllers/PageController.js";
import { selectRecipe } from "./controllers/MyRecipesController.js";

window.navigate = navigate;

window.selectRecipe = selectRecipe;
>>>>>>> Stashed changes

initRouter();
initPageController();
