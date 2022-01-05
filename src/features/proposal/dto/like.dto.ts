import { IsNumber } from 'class-validator';

export class LikeDto {
  @IsNumber()
  proposalId: number;
}
