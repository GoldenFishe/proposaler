import { Http } from "./http";
import { ProjectType } from "../types/ProjectType";
import { NewProject } from "../pages/Proposal/types";

export namespace ProjectsRequests {
  export function create(newProject: NewProject) {
    return Http.Instance.post<NewProject, ProjectType>(`/project/create`, newProject);
  }
}
