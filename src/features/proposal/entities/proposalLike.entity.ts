import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from '../../user/user.entity';

@Entity()
export class ProposalLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  proposalId: number;

  @Column()
  authorId: number;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'authorId' })
  author: User;
}
