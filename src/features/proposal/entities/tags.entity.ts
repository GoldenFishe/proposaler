import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Proposal } from './proposal.enity';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Exclude()
  @Column()
  proposalId: number;

  @ManyToOne(() => Proposal, { nullable: false })
  proposal: Proposal;
}
