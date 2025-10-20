import { model } from "../models/index.js";
import { updateView } from "../views/view.js";

export function switchPage(newPage) {
	model.app.currentPage = newPage;
	updateView();
}
