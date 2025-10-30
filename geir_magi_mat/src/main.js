import { updateView } from "./views/view.js";
import { switchPage } from "./controllers/PageController.js";
import { searchRecipes } from "./controllers/MyRecipesController.js";
import { decreasePortion, increasePortion } from "./views/components/PortionCalculator.js";

window.switchPage = switchPage;
window.searchRecipes = searchRecipes;
window.decreasePortion = decreasePortion;
window.increasePortion = increasePortion;

updateView();
