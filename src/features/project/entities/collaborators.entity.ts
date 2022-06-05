import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Project } from './project.entity';

@Entity()
export class Collaborators {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, { nullable: false, eager: true })
  project: Project;
}
