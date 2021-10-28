import { IsNumberString } from 'class-validator';

export class DislikeDto {
  @IsNumberString()
  commentId: number;

  @IsNumberString()
  authorId: number;
}
