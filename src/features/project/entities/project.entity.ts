import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Proposal } from '../../proposal/entities/proposal.enity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  githubRepositoryId: number;

  @Exclude()
  @Column()
  ownerId: number;

  @Exclude()
  @Column()
  proposalId: number;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @ManyToOne(() => Proposal, { nullable: false, eager: true })
  @JoinColumn({ name: 'proposalId' })
  proposal: Proposal;

  @ManyToMany(() => User, { nullable: false, eager: true })
  @JoinTable()
  collaborators: User[];
}
