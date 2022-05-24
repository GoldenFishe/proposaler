import { IsString } from 'class-validator';

export class Tags {
  @IsString()
  tag: string;
}
