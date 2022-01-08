import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  comment: string;

  @IsNumberString()
  proposalId: number;

  @IsOptional()
  @IsNumberString()
  replyTo: number;
}
