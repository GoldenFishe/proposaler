import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Proposal } from '../../proposal/entities/proposal.enity';
import { User } from '../../user/user.entity';
import { CommentLike } from './commentLike.entity';
import { CommentDislike } from './commentDislike.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createDatetime: Date;

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

  @ManyToMany(() => CommentLike, { nullable: false, eager: true })
  @JoinTable()
  likes: CommentLike[];

  @ManyToMany(() => CommentDislike, { nullable: false, eager: true })
  @JoinTable()
  dislikes: CommentDislike[];
}
