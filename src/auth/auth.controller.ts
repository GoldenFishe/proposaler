import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('sign-in')
  signIn() {
    return this.authService.signIn();
  }

  @Get('sign-up')
  signUp() {
    return this.authService.signUp();
  }
}
