const navBar = /* HTML */ `<nav>
	<div></div>
	<div onclick="switchPage('FrontPage')" id="logo">
		<h1>Middags-Magi</h1>
	</div>
	<div><i class="fa-solid fa-bars fa-xl"></i></div>
</nav>`;

const footer = /* HTML */ `<footer>© Middags-Magi</footer>`;

const page = () => {
	const pageHtml = pageManager();
	return /* HTML */ `${navBar} ${pageHtml} ${footer}`;
};

function updateView() {
	document.getElementById("app").innerHTML = page();
}

function pageManager() {
	let html = "";

	switch (model.app.currentPage) {
		case "FrontPage":
			html = frontPageView();
			break;
	}

	switch (model.app.currentPage) {
		case "exploreRecipes":
			html = exploreRecipesView();
			break;
	}
	return html;
}
