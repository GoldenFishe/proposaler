import { makeAutoObservable } from 'mobx';

import { ProjectsRequests } from '../api/projects';
import { NewProject } from '../pages/Proposal/types';
import { ProposalType } from '../types/ProposalType';
import { ProjectType } from '../types/ProjectType';

export class ProjectsModel {
  projects: ProjectType[];

  constructor() {
    this.projects = [];
    makeAutoObservable(this);
  }

  async createProject(newProject: NewProject) {
    const project = await ProjectsRequests.create(newProject);
    console.log(project);
    // if (comments) {
    //   this.setComments(comments);
    // }
  }

  getByProposalId(proposalId: ProposalType['id']) {
    ProjectsRequests.getByProposalId(proposalId).then((projects) => {
      if (projects) this.projects = projects;
    });
  }
}

export const projectsModel = new ProjectsModel();
