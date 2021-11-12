import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.enity';

@Entity()
export class CommentFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  commentId: number;

  @ManyToOne(() => Comment, (comment) => comment.files)
  comment: Comment;
}
