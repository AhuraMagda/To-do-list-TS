export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["CODING"] = "coding";
    Category["IMPORTANT"] = "important";
})(Category || (Category = {}));
export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = "Nowe zadanie";
        this.done = true;
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
