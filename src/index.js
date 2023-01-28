import './style.css';
import Project from './project';
import Task from './task';
import { displayDefaultProjects, listProjectsContent, projectButton, createProject, projectsEventListener } from './sidebar';

function functionHandler() {
    displayDefaultProjects();
    projectButton();
}

functionHandler();