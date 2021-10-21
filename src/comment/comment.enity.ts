import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column()
  createDatetime: string;

  @Column()
  likes: string;

  @Column()
  dislikes: string;
}
