import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Proposal } from '../../proposal/proposal.enity';
import { User } from '../../user/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createDatetime: Date;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  dislikes: number;

  @Exclude()
  @Column()
  authorId: number;

  @Column()
  proposalId: number;

  @ManyToOne(() => Proposal, { nullable: false })
  @JoinColumn({ name: 'proposalId' })
  proposal: Proposal;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'authorId' })
  author: User;
}
