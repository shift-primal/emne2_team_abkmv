import { navigate, initRouter } from "./router.js";
import { initPageController } from "./controllers/PageController.js";
import { selectRecipe } from "./controllers/MyRecipesController.js";

window.navigate = navigate;

window.selectRecipe = selectRecipe;

initRouter();
initPageController();
