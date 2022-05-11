import { IsString, IsArray } from 'class-validator';

export class CreateDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];
}
