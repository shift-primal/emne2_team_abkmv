import { switchPage } from "./controllers/PageController.js";

const routes = {
    "/": "FrontPage",
    "/my-recipes": "MyRecipes",
    "/explore-recipes": "ExploreRecipes",
    "/show-recipe": "FullRecipe",
    "/suggest-recipe": "SuggestRecipe",
};

const handleLocation = () => {
    const path = window.location.pathname;
    const route = routes[path] || "FrontPage";
    switchPage(route);
};

export function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    handleLocation();
}

export function initRouter() {
    window.onpopstate = handleLocation;

    handleLocation();

    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate(e.target.getAttribute("href"));
        }
    });
}
