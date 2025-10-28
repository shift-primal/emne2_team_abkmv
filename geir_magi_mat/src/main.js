import { updateView } from "./views/view.js";
import { switchPage } from "./controllers/PageController.js";
import { searchRecipes } from "./controllers/MyRecipesController.js";

window.switchPage = switchPage;
window.searchRecipes = searchRecipes;

updateView();
