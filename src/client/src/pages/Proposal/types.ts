import { UserType } from "../../types/UserType";
import { ProposalType } from "../../types/ProposalType";

export type NewProject = {
  name: string;
  description: string;
  collaborators: Array<UserType["id"]>;
  proposalId: ProposalType["id"];
};