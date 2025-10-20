function findRecipeByName(name) {
	return recipes.find((r) => r.name.toLowerCase() === name.toLowerCase());
}

function findRecipeById(id) {
	return recipes.find((r) => r.id === id);
}

const mealPlan = {
	monday: findRecipeByName("lasagne"),
	tuesday: findRecipeById(2),
	wednesday: "",
	thursday: "",
	friday: findRecipeByName("taco"),
	saturday: "",
	sunday: "",
};
