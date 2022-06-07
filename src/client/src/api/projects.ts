import { Http } from './http';
import { ProjectType } from '../types/ProjectType';
import { NewProject } from '../pages/Proposal/types';
import { ProposalType } from '../types/ProposalType';

export namespace ProjectsRequests {
  export function create(newProject: NewProject) {
    return Http.Instance.post<NewProject, ProjectType>(
      `/project/create`,
      newProject,
    );
  }

  export function getByProposalId(proposalId: ProposalType['id']) {
    return Http.Instance.get<ProjectType[]>(`/project?proposal=${proposalId}`);
  }
}
