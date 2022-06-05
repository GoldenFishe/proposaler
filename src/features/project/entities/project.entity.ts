import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from '../../user/entities/user.entity';
import { Proposal } from '../../proposal/entities/proposal.enity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  githubRepositoryId: number;

  @Column()
  ownerId: number;

  @Column()
  proposalId: number;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'proposalId' })
  proposal: Proposal;
}
