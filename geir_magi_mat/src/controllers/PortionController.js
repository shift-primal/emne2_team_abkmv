import { model } from "../models/index.js";
import { updateView } from "../views/view.js";

export function decreasePortion() {
    if (model.app.selectedRecipe) {
        model.app.adjustedPortionSize = Math.max(
            1,
            (model.app.adjustedPortionSize || model.app.selectedRecipe.portionSize) - 1
        );

        updateView();
    }
}

export function increasePortion() {
    // console.log("fired increase portion size...");
    if (model.app.selectedRecipe) {
        model.app.adjustedPortionSize =
            (model.app.adjustedPortionSize || model.app.selectedRecipe.portionSize) + 1;
        updateView();
    }
}
