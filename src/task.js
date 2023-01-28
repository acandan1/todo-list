export default class Task {
    constructor(name, description, dueDate, priorityLevel) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriorityLevel() {
        return this.priorityLevel;
    }
}