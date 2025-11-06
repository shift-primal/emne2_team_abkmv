import { switchPage } from "./controllers/PageController.js";

const routes = {
    "/": "FrontPage",
    "/my-recipes": "MyRecipes",
    "/explore-recipes": "ExploreRecipes",
    "/recipe/:id": "ShowRecipe",
    "/suggest-recipe": "SuggestRecipe",
};

const handleLocation = () => {
    const path = window.location.pathname;

    // Sjekk for vanlig route først (statisk)
    if (routes[path]) {
        switchPage(routes[path]);
        return;
    }

    // Også sjekk for dynamisk route
    for (const route in routes) {
        if (route.includes(":")) {
            const pattern = new RegExp(`^${route.replace(/:\w+/g, "([\\w-]+)")}$`);
            const match = path.match(pattern);

            if (match) {
                const view = routes[route];
                const params = match.slice(1);
                switchPage(view, ...params);
                return;
            }
        }
    }

    // Default route (frontpage) his ingen matcher
    switchPage("FrontPage");
};

export function navigate(path) {
    window.history.pushState({}, path, window.location.origin + path);
    handleLocation();
}

export function initRouter() {
    window.onpopstate = handleLocation;

    handleLocation();

    document.body.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            navigate(link.getAttribute("href"));
        }
    });
}
