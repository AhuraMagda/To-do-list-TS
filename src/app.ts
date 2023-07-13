
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
    new Task("learn TS", false, Category.IMPORTANT),
    new Task("do qualtrics project", false, Category.CODING),
    new Task("drink water", true),
]

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

const addTask = (Task: Task) => {
    tasks.push(Task)
}

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const taskButton: HTMLButtonElement = document.querySelector("button");

taskButton.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!")
    render(tasks, tasksContainerElement)
})

const taskInstance = new Task("tidy the room", true);
addTask(taskInstance)

renderCategories(categories, categoriesUl, updateSelectedCategory);
render(tasks, tasksContainerElement);

