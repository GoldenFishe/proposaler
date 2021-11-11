import { IsNumberString } from 'class-validator';

export class LikeDto {
  @IsNumberString()
  proposalId: number;

  @IsNumberString()
  authorId: number;
}
