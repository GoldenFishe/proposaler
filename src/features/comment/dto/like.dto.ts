import { IsNumber } from 'class-validator';

export class LikeDto {
  @IsNumber()
  commentId: number;
}
