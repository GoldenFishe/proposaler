import { IsNumber } from 'class-validator';

export class DislikeDto {
  @IsNumber()
  proposalId: number;
}
