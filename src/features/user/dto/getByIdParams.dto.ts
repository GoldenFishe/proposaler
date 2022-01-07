import { IsNumberString } from 'class-validator';

export class GetByIdParamsDto {
  @IsNumberString()
  id: number;
}
