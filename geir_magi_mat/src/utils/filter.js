export function findRecipeByName(recipes, name) {
	return recipes.find((r) => r.name.toLowerCase() === name.toLowerCase());
}

export function findRecipeById(recipes, id) {
	return recipes.find((r) => r.id === id);
}
