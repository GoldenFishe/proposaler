import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Proposal } from './proposal.enity';

@Entity()
export class ProposalFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  proposalId: number;

  @ManyToOne(() => Proposal, (proposal) => proposal.files)
  proposal: Proposal;
}
