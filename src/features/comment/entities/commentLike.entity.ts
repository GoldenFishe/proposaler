import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Comment } from './comment.enity';
import { User } from '../../user/user.entity';

@Entity()
export class CommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentId: number;

  @Column()
  authorId: number;

  @ManyToOne(() => Comment, { nullable: false, eager: true })
  @JoinColumn({ name: 'commentId' })
  comment: Comment;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'authorId' })
  author: User;
}
