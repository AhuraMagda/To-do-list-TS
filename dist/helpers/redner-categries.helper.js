export const renderCategories = (categories, selectedCategory, categoriesUl) => {
    categories.forEach(category => {
        const categoryInput = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.name = "category";
        categoryInput.value = category;
        categoryInput.id = `category-${category}`;
        categoryInput.addEventListener("change", () => { selectedCategory = category; });
        const categoryLabel = document.createElement("label");
        categoryLabel.setAttribute("for", `category-${category}`);
        categoryLabel.innerHTML = category;
        const categoryLi = document.createElement("li");
        categoryLi.appendChild(categoryInput);
        categoryLi.appendChild(categoryLabel);
        categoriesUl.appendChild(categoryLi);
    });
};
