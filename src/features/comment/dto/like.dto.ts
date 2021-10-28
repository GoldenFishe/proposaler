import { IsNumberString } from 'class-validator';

export class LikeDto {
  @IsNumberString()
  commentId: number;

  @IsNumberString()
  authorId: number;
}
