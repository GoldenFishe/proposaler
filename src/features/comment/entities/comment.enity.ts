import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Proposal } from '../../proposal/entities/proposal.enity';
import { User } from '../../user/entities/user.entity';
import { CommentLike } from './commentLike.entity';
import { CommentDislike } from './commentDislike.entity';
import { CommentFile } from './commentFile.entity';

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

  @ManyToOne(() => User, { nullable: false, eager: true })
  author: User;

  @OneToMany(() => CommentLike, (commentLike) => commentLike.comment, {
    nullable: false,
    eager: true,
    cascade: true,
  })
  likes: CommentLike[];

  @OneToMany(() => CommentDislike, (commentDislike) => commentDislike.comment, {
    nullable: false,
    eager: true,
    cascade: true,
  })
  dislikes: CommentDislike[];

  @OneToMany(() => CommentFile, (commentFile) => commentFile.comment, {
    nullable: false,
    eager: true,
  })
  files: CommentFile[];
}
