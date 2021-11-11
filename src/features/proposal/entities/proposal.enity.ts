import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from '../../user/user.entity';
import { ProposalLike } from './proposalLike.entity';
import { ProposalDislike } from './proposalDislike.entity';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createDatetime: Date;

  @Exclude()
  @Column()
  authorId: number;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'authorId' })
  author: User;

  @ManyToMany(() => ProposalLike, { nullable: false, eager: true })
  @JoinTable()
  likes: ProposalLike[];

  @ManyToMany(() => ProposalDislike, { nullable: false, eager: true })
  @JoinTable()
  dislikes: ProposalDislike[];
}
