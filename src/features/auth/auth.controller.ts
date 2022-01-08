import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @SerializeOptions({ groups: ['self'] })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('sign-in')
  signIn(@Req() req) {
    return this.authService.signIn(req.user.id);
  }

  @SerializeOptions({ groups: ['self'] })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
