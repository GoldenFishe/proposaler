import { IsNumberString, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  comment: string;

  @IsNumberString()
  proposalId: number;
}
