import { model } from "../../models/index.js";
import { updateView } from "../view.js";

export function decreasePortion() {
    if (model.app.selectedRecipe) {
        model.app.selectedRecipe.portionSize = Math.max(
            1,
            model.app.selectedRecipe.portionSize - 1
        );
        updateView();
    }
}

export function increasePortion() {
    if (model.app.selectedRecipe) {
        model.app.selectedRecipe.portionSize += 1;
        updateView();
    }
}

export function PortionCalculator(recipe) {
    return /* html */ `
        <div class="portion-container">
            <div onclick="decreasePortion()" class="decrease-portion-btn">-</div>
            <div class="portion-size">${recipe.portionSize}</div>
            <div onclick="increasePortion()" class="increase-portion-btn">+</div>
        </div>
    `;
}
