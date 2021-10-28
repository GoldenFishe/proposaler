import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Proposal } from '../../proposal/proposal.enity';
import { User } from '../../user/user.entity';
import { CommentLike } from './commentLike.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createDatetime: Date;

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

  @ManyToOne(() => User, { nullable: false })
  author: User;

  @ManyToMany(() => CommentLike, (commentLike) => commentLike.comment, {
    nullable: false,
  })
  likes: CommentLike[];
}
