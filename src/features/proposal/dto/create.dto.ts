import { IsNumberString, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumberString()
  authorId: number;
}
