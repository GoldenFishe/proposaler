import { IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  username: string;
}
