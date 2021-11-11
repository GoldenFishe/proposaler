import { IsNumberString } from 'class-validator';

export class DislikeDto {
  @IsNumberString()
  proposalId: number;

  @IsNumberString()
  authorId: number;
}
