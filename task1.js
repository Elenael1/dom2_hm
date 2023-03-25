const list = document.getElementsByClassName("list");

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = ingredients.map((item) => {
    const ingElem = document.createElement("li");
    ingElem.classList.add("item");
    ingElem.textContent = `${item}`;
    return ingElem;
});

console.log(ingredientsList);

list.append(...ingredientsList);