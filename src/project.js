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

    removeFromArray(taskName) {
        for (let i = 0; i < this.taskArray.length; i++) {
            if (this.taskArray[i].getName() === taskName) {
                this.taskArray.splice(i, 1);
            }
        }
    }
}
