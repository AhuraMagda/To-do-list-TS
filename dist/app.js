import { render as renderCategories } from "./helpers/redner-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Category } from "./types/types.js";
const tasksContainerElement = document.querySelector(".tasks");
const categoriesUl = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.CODING,
    Category.IMPORTANT,
];
const tasks = [
    { title: "learn TS", done: false, category: Category.IMPORTANT }, { title: "do qualtrics project", done: false }, { title: "drink water", done: true }
];
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
const addTask = (Task) => {
    tasks.push(Task);
};
const taskNameInputElement = document.querySelector("#name");
const taskButton = document.querySelector("button");
taskButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesUl, updateSelectedCategory);
render(tasks, tasksContainerElement);
