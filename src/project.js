export const projectArray = [];

export class Project {
    constructor(name, taskArray) {
        this.name = name;
        this.taskArray = taskArray;
        projectArray.push(this);
    }

    getName() {
        return this.name;
    }

    getTaskArray() {
        return this.taskArray;
    }

    pushToArray(task) {
        this.taskArray.push(task);
    }
}
