import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Expose({ groups: ['self'] })
  @Column({ unique: true })
  login: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  avatar: string;
}
