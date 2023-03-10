/* eslint-disable no-inner-declarations */
/* eslint-disable no-lonely-if */
import  { projectArray, Project } from './project';
import Task from './task';

function displayProject(projectName) {
    const projects = document.getElementsByClassName("display-projects");
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    document.getElementById("display-" + projectName).style.display = "block";
}

function createProject(projectName) {
    const newProject = new Project(projectName, []);
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const pro = document.createElement("button");
    pro.id = projectName;
    pro.className = "projects";
    const proH3 = document.createElement("h3");
    proH3.innerHTML = newProject.getName();
    pro.appendChild(proH3);
    sidebar.appendChild(pro);
    projectsEventListener(newProject);
    listProjectsContent(newProject);
}

function displayDefaultProjects() {
    const sidebar = document.getElementsByClassName("sidebar")[0];

    createProject("Inbox");
    const inbox = document.getElementById("Inbox");
    const inboxImg = document.createElement("img");
    inboxImg.src = "../src/media/inbox.jpg";
    inboxImg.id = "inbox-logo";
    inbox.appendChild(inboxImg);
    createProject("Today");
    const today = document.getElementById("Today");
    const todayImg = document.createElement("img");
    todayImg.src = "../src/media/calendar-today.svg";
    todayImg.id = "inbox-logo";
    today.appendChild(todayImg);
    sidebar.appendChild(document.createElement("hr"));
}

function projectButton() {
    const sidebar = document.getElementsByClassName("sidebar")[0];

    const addProjectButton = document.createElement("button");
    addProjectButton.id = "project-btn";
    addProjectButton.innerHTML = "+ Add Project";

    sidebar.appendChild(addProjectButton);
    addProjectButton.addEventListener('click', (event) => {
        openForm();
    });

    const popupDiv = document.createElement("div");
    popupDiv.className = "popup-form";
    const form = document.createElement("form");
    form.className = "project-form";
    const title = document.createElement("h1");
    title.innerHTML = "Create Project";
    const label = document.createElement("label");
    label.setAttribute("for", "project-name");
    label.innerHTML = "Project Name: "
    const input = document.createElement("input");
    input.type = "text";
    input.name = "project-name";
    input.id = "project-name";
    input.required = true;

    form.appendChild(title);
    form.appendChild(label);
    form.appendChild(input);

    function openForm() {
        popupDiv.style.display = "block";
    }

    function closeForm() {
        popupDiv.style.display = "none";
    }

    function checkIfProjectExists(projectTitle) {
        for (let i = 0; i < projectArray.length; i++) {
            if (projectArray[i].getName() === projectTitle) {
                return true;
            }
        }
        return false;
    } 

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Create"
    submitButton.type = "submit"
    submitButton.className = "submit-btn";
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (checkIfProjectExists(input.value)) {
            alert("A project with this name already exists!");
        } else {
            if (document.getElementById("project-name").value !== "") {
                createProject(document.getElementById("project-name").value);
                document.getElementById("project-name").value = "";
                closeForm();
            } else {
                alert("Please give the project a name!");
            }
        }
    });

    const cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";
        cancelButton.type = "submit";
        cancelButton.className = "cancel-btn";

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
                input.value = "";
                popupDiv.style.display = "none";
        });

    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    popupDiv.appendChild(form);
    sidebar.appendChild(popupDiv);
}

function projectsEventListener(project) {
    if (project) {
        const ourProject = document.getElementById(project.getName());
        const allProjects = document.getElementsByClassName("projects");
        ourProject.addEventListener('click', (event) => {
            for (let i = 0; i < allProjects.length; i++) {
                allProjects[i].style.backgroundColor = "coral";
            }
            ourProject.style.backgroundColor = "yellow";
            displayProject(project.getName());
        });
    }
}

function listProjectsContent(project) {
    if (project) {
        const content = document.getElementsByClassName("content")[0];

        const div = document.createElement("div");
        div.className = "display-projects";
        div.id = "display-" + project.getName();
        const h1 = document.createElement("h1");
        h1.innerHTML = project.getName();
        const btn = document.createElement("button");
        btn.className = "add-task";
        btn.innerHTML = "+ Add Task";

        btn.addEventListener('click', (event) => {
            popupDivTask.style.display = "block";
        });

        div.appendChild(h1);
        div.appendChild(btn);
        content.appendChild(div);

        const popupDivTask = document.createElement("div");
        popupDivTask.className = "popup-form-task";
        const form = document.createElement("form");
        form.className = "task-form";
        const title = document.createElement("h1");
        title.innerHTML = "Create Task";
        const label = document.createElement("label");
        label.setAttribute("for", "task-name");
        label.innerHTML = "Task Name: ";
        const input = document.createElement("input");
        input.type = "text";
        input.name = "task-name";
        input.id = "task-name";
        input.required = true;
        const label2 = document.createElement("label");
        label2.setAttribute("for", "task-description");
        label2.innerHTML = "Task Description: ";
        const input2 = document.createElement("input");
        input2.type = "text";
        input2.name = "task-description";
        input2.id = "task-description";

        const label3 = document.createElement("label");
        label3.setAttribute("for", "task-date");
        label3.innerHTML = "Task Date: ";
        const input3 = document.createElement("input");
        input3.type = "date";
        input3.name = "task-date";
        input3.id = "task-date";

        const label4 = document.createElement("label");
        label4.setAttribute("for", "task-priority");
        label4.innerHTML = "Priority Level: ";
        const input4 = document.createElement("input");
        input4.setAttribute('list', 'priorities');
        input4.name = "task-priority";
        input4.id = "task-priority";
        const datalist = document.createElement("datalist");
        datalist.id = "priorities";
        const option1 = document.createElement("option");
        option1.value = "Top priority!";
        const option2 = document.createElement("option");
        option2.value = "Important!";
        const option3 = document.createElement("option");
        option3.value = "Can wait";
        datalist.appendChild(option1);
        datalist.appendChild(option2);
        datalist.appendChild(option3);

        form.appendChild(title);
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(label3);
        form.appendChild(input3);
        form.appendChild(label4);
        form.appendChild(input4);
        form.appendChild(datalist);

        const submitButton = document.createElement("button");
        submitButton.innerHTML = "Create";
        submitButton.type = "submit";
        submitButton.className = "submit-btn";

        function checkIfTaskExists(taskTitle) {
            const ourTaskArray = project.getTaskArray();
            for (let i = 0; i < ourTaskArray.length; i++) {
                if (ourTaskArray[i].getName() === taskTitle) {
                    return true;
                }
            }
            return false;
        } 

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (checkIfTaskExists(input.value)) {
                alert("A task with this name already exists!");
            } else {
                if (input.value !== "") {
                    createTask(project, input.value, input2.value, input3.value, input4.value);
                    input.value = "";
                    input2.value = "";
                    input3.value = "";
                    input4.value = "";
                    popupDivTask.style.display = "none";
                } else {
                    alert("Please give the task a name!");
                }
            }
        });

        const cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Cancel";
        cancelButton.type = "submit";
        cancelButton.className = "cancel-btn";

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
                input.value = "";
                input2.value = "";
                input3.value = "";
                input4.value = "";
                popupDivTask.style.display = "none";
        });

        form.appendChild(submitButton);
        form.appendChild(cancelButton);
        popupDivTask.appendChild(form);
        div.appendChild(popupDivTask);

        const taskDiv = document.createElement("div");
        taskDiv.className = "task-cards";
        div.appendChild(taskDiv);
    }
}

function createTask(project, taskName, taskDescription, taskDate, taskPriority) {
    const newTask = new Task(taskName, taskDescription, taskDate, taskPriority);
    for (let i = 0; i<projectArray.length; i++) {
        if (project.getName() === projectArray[i].getName()) {
            projectArray[i].pushToArray(newTask);
            updateProjectsContent(project);
        }
    }
}

function updateProjectsContent(project) {
    const projectArr = project.getTaskArray();
    const projectDiv = document.getElementById("display-" + project.getName());
    const taskCards = projectDiv.querySelector(".task-cards");

    const ourTasks = document.getElementsByClassName(project.getName() + "-tasks");

    for (let i = 0; i < projectArr.length; i++) {
        const idCheck = document.getElementById(projectArr[i].getName());
        if (idCheck) {
            continue;
        }
        const div = document.createElement("div");
        div.id = projectArr[i].getName();
        div.className = project.getName() + "-tasks";

        const cardName = document.createElement("h3");
        cardName.innerHTML = projectArr[i].getName();
        div.appendChild(cardName);

        const cardDescription = document.createElement("p");
        cardDescription.innerHTML = projectArr[i].getDescription();
        div.appendChild(cardDescription);

        const cardDate = document.createElement("h3");
        cardDate.innerHTML = projectArr[i].getDueDate();
        div.appendChild(cardDate);

        const cardPriority = document.createElement("h3");
        cardPriority.innerHTML = projectArr[i].getPriorityLevel();
        div.appendChild(cardPriority);

        const remove = document.createElement("button");
        remove.innerHTML = "Remove";
        remove.addEventListener('click', (event) => {
            taskCards.removeChild(div);
            project.removeFromArray(projectArr[i].getName());
        });
        div.appendChild(remove);

        taskCards.appendChild(div);
    }
}


export { displayProject, displayDefaultProjects, projectButton, createProject, projectsEventListener, listProjectsContent };