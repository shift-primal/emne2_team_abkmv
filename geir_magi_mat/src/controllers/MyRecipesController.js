import { model } from "../models/index.js";
import { updateView } from "../views/view.js";

function setSelectedRecipe(recipeIdx) {
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
    // console.log("selectRecipe fired!");

    setSelectedRecipe(recipeIdx);
    switchPage("FullRecipe");
}

export function removeMyRecipe(recipeIdx) {
    setSelectedRecipe(recipeIdx);
    model.recipes.splice(recipeIdx, 1);
    console.log(`Recipe "${model.app.selectedRecipe.name}" removed!`);
    model.app.selectedRecipe = null;
    updateView();
}

export function editMyRecipe(recipeIdx){
    setSelectedRecipe(recipeIdx);
    switchPage("EditRecipe");
}
