import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User } from '../../user/entities/user.entity';
import { ProposalLike } from './proposalLike.entity';
import { ProposalDislike } from './proposalDislike.entity';
import { ProposalFile } from './proposalFile.entity';
import { Tags } from './tags.entity';

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

  @OneToMany(() => ProposalLike, (proposalLike) => proposalLike.proposal, {
    nullable: false,
    eager: true,
    cascade: true,
  })
  likes: ProposalLike[];

  @OneToMany(
    () => ProposalDislike,
    (proposalDislike) => proposalDislike.proposal,
    { nullable: false, eager: true, cascade: true },
  )
  dislikes: ProposalDislike[];

  @OneToMany(() => ProposalFile, (proposalFiles) => proposalFiles.proposal, {
    nullable: false,
    eager: true,
  })
  files: ProposalFile[];

  @OneToMany(() => Tags, (tags) => tags.proposal, {
    nullable: false,
    eager: true,
  })
  tags: Tags[];
}
