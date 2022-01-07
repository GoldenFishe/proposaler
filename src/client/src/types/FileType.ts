import { ProposalType } from './ProposalType';

export type FileType = {
  filename: string;
  id: number;
  proposalId: ProposalType['id'];
};
