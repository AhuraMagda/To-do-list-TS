import { render as renderCategories } from "./helpers/redner-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Task, Category } from "./types/types.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesUl: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.CODING,
    Category.IMPORTANT,
];

const tasks: Task[] = [
    {title: "learn TS", done: false, category: Category.IMPORTANT}, {title: "do qualtrics project", done: false}, {title: "drink water", done: true}
]

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

const addTask = (Task) => {
    tasks.push(Task)
}

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const taskButton: HTMLButtonElement = document.querySelector("button");

taskButton.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory});
    render(tasks, tasksContainerElement)
})


renderCategories(categories, categoriesUl, updateSelectedCategory);
render(tasks, tasksContainerElement);