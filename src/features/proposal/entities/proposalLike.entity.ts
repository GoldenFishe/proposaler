import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/user.entity';
import { Proposal } from './proposal.enity';

@Entity()
export class ProposalLike {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  proposalId: number;

  @Column()
  authorId: number;

  @ManyToOne(() => User, { nullable: false })
  author: User;

  @ManyToOne(() => Proposal, { nullable: false })
  proposal: Proposal;
}
