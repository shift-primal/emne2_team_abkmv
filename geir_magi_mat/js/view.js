function updateView() {
	const html = pageManager();

	console.log(html);

	document.getElementById("app").innerHTML = html;
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
	console.log(html);
	return html;
}
