import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createDatetime: string;

  @Column()
  likes: string;

  @Column()
  dislikes: string;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;
}
