import { makeAutoObservable } from "mobx";

import { ProjectsRequests } from "../api/projects";
import { NewProject } from "../pages/Proposal/types";

export class ProjectsModel {

  constructor() {
    makeAutoObservable(this);
  }

  async createProject(newProject: NewProject) {
    const project = await ProjectsRequests.create(newProject);
    console.log(project);
    // if (comments) {
    //   this.setComments(comments);
    // }
  }
}

export const projectsModel = new ProjectsModel();
