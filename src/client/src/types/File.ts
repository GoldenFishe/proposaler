import { Proposal } from "./Proposal";

export type File = {
  filename: string;
  id: number;
  proposalId: Proposal['id'];
};