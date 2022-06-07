import { IsNumber, IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  text: string;

  @IsNumber()
  recipient: number;
}
