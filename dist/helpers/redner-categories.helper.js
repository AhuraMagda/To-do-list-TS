import { Category } from "../types/types.js";
export const render = (categories, categoriesUl, inputChangeCallback) => {
    const handleCategoryChange = (category) => {
        if (category === Category.GENERAL) {
            document.body.style.background = "#1ce";
        }
        else if (category === Category.CODING) {
            document.body.style.background = "white";
        }
        else if (category === Category.IMPORTANT) {
            document.body.style.background = "red";
        }
        else {
            const never = category;
            console.log(never);
        }
    };
    categories.forEach(category => {
        const categoryInput = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.name = "category";
        categoryInput.value = category;
        categoryInput.id = `category-${category}`;
        categoryInput.addEventListener("change", () => { inputChangeCallback(category); handleCategoryChange(category); });
        const categoryLabel = document.createElement("label");
        categoryLabel.setAttribute("for", `category-${category}`);
        categoryLabel.innerHTML = category;
        const categoryLi = document.createElement("li");
        categoryLi.appendChild(categoryInput);
        categoryLi.appendChild(categoryLabel);
        categoriesUl.appendChild(categoryLi);
    });
};
