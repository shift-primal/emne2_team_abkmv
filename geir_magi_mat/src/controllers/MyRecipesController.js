import { model } from "../models/index.js";
import { updateView } from "../views/view.js";
import { switchPage } from "./PageController.js";

export function setSelectedRecipe(recipeIdx) {
    model.app.selectedRecipe = model.recipes[recipeIdx];
}

export function searchRecipes() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const filteredRecipes = model.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchInput)
    );

    console.log(filteredRecipes);

    model.app.searchResults = filteredRecipes;
    updateView();
}

export function selectRecipe(recipeIdx) {
    const recipeId = model.app.selectedRecipe.id || recipeIdx;
    switchPage("ShowRecipe", recipeId);
}

export function removeMyRecipe(recipeIdx) {
  // Create the popup element
  const confirmPopup = document.createElement('div');
  confirmPopup.className = 'removeMyRecipePopup';

  const confirmMessage = document.createElement('p');
  confirmMessage.textContent = 'Are you sure you want to delete this recipe?';

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Delete';
  confirmBtn.onclick = () => {
    setSelectedRecipe(recipeIdx);
    model.recipes.splice(recipeIdx, 1);
    console.log(`Recipe "${model.app.selectedRecipe.name}" removed!`);
    model.app.selectedRecipe = null;
    updateView();
    document.body.removeChild(confirmPopup);
  };

  const goBackBtn = document.createElement('button');
  goBackBtn.textContent = 'Go Back';
  goBackBtn.onclick = () => {
    document.body.removeChild(confirmPopup);
  };

  confirmPopup.appendChild(confirmMessage);
  confirmPopup.appendChild(confirmBtn);
  confirmPopup.appendChild(goBackBtn);

  document.body.appendChild(confirmPopup);
}

export function editMyRecipe(recipeIdx) {
    setSelectedRecipe(recipeIdx);
    switchPage("EditRecipe");
}
