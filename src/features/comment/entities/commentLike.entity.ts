import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Comment } from './comment.enity';

@Entity()
export class CommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commentId: number;

  @Column()
  authorId: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'authorId' })
  author: User;

  @ManyToOne(() => Comment, { nullable: false })
  comment: Comment;
}
