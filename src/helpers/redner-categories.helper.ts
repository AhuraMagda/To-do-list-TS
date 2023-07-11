
import { Category } from "../types/types.js";


export const render = (categories: Category[], categoriesUl: HTMLElement, inputChangeCallback: (category: Category) => void) => {
    const handleCategoryChange = (category: Category) => {
        if (category === Category.GENERAL) {
            document.body.style.background = "#1ce";
        } else if (category === Category.CODING) {
            document.body.style.background = "white";
        } else if (category === Category.IMPORTANT) {
            document.body.style.background = "red";
        } else {
            const never: never = category;
            console.log(never);
        }
    };
    
    categories.forEach(category => {
        const categoryInput: HTMLInputElement = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.name = "category";
        categoryInput.value = category;
        categoryInput.id = `category-${category}`;
        categoryInput.addEventListener("change", () => {inputChangeCallback(category); handleCategoryChange(category);});

        const categoryLabel: HTMLLabelElement = document.createElement("label");
        categoryLabel.setAttribute("for", `category-${category}`);
        categoryLabel.innerHTML = category;

        const categoryLi = document.createElement("li");
        categoryLi.appendChild(categoryInput);
        categoryLi.appendChild(categoryLabel);

        categoriesUl.appendChild(categoryLi);
        
    })
}