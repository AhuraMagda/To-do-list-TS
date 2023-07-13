import { render as renderCategories } from "./helpers/redner-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Task, Category } from "./types/types.js";
const tasksContainerElement = document.querySelector(".tasks");
const categoriesUl = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.CODING,
    Category.IMPORTANT,
];
const tasks = [
    new Task("learn TS", false, Category.IMPORTANT),
    new Task("do qualtrics project", false, Category.CODING),
    new Task("drink water", true),
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
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    render(tasks, tasksContainerElement);
});
const taskInstance = new Task("tidy the room", true);
addTask(taskInstance);
renderCategories(categories, categoriesUl, updateSelectedCategory);
render(tasks, tasksContainerElement);
