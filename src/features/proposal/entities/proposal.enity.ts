import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from '../../user/user.entity';
import { ProposalLike } from './proposalLike.entity';
import { ProposalDislike } from './proposalDislike.entity';
import { ProposalFile } from './proposalFile.entity';

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

  @OneToOne(() => ProposalLike, {
    nullable: false,
    eager: true,
    cascade: true,
  })
  @JoinTable()
  likes: ProposalLike[];

  @ManyToMany(() => ProposalDislike, {
    nullable: false,
    eager: true,
    cascade: true,
  })
  @JoinTable()
  dislikes: ProposalDislike[];

  @OneToMany(() => ProposalFile, (proposalFiles) => proposalFiles.proposal, {
    nullable: false,
    eager: true,
  })
  files: ProposalFile[];
}
