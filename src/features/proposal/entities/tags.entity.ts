import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Proposal } from './proposal.enity';

@Entity()
export class Tags {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  proposalId: number;

  @ManyToOne(() => Proposal, { nullable: false })
  proposal: Proposal;
}