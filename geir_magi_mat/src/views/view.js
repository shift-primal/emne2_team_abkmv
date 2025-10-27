import { model } from "../models/index.js";
import { FrontPageView } from "./FrontPageView.js";
import { ExploreRecipesView } from "./ExploreRecipesView.js";
import { MyRecipesView } from "./MyRecipesView.js";

const navBar = /* HTML */ `<nav>
	<div></div>
	<div
		onclick="switchPage('FrontPage')"
		id="logo"
	>
		<h1>Middags-Magi</h1>
	</div>
	<div><i class="fa-solid fa-bars fa-xl"></i></div>
</nav>`;

const footer = /* HTML */ `<footer>© Middags-Magi</footer>`;

const page = () => {
	const pageHtml = pageManager();
	return /* HTML */ `${navBar} ${pageHtml} ${footer}`;
};

export function updateView() {
	document.getElementById("app").innerHTML = page();
}

function pageManager() {
	switch (model.app.currentPage) {
		case "FrontPage":
			return FrontPageView();
		case "ExploreRecipes":
			return ExploreRecipesView();
		case "MyRecipes":
			return MyRecipesView();
		default:
			return "";
	}
}
