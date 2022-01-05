import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @Column({ unique: true })
  login: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  username: string;
}
