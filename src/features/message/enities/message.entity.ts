import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from '../../user/entities/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @CreateDateColumn()
  createDatetime: Date;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn()
  recipient: User;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn()
  sender: User;
}
