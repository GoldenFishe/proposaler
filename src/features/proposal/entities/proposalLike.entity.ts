import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';
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
  @JoinColumn({ name: 'authorId' })
  author: User;

  @ManyToOne(() => Proposal, { nullable: false })
  proposal: Proposal;
}
