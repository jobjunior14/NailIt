import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';
import { SignInInterface } from './interfaces/singIn-return.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('signIn')
  signIn(@Body(ValidationPipe) userData: SignInDto): Promise<SignInInterface> {
    return this.authService.signIn(userData);
  }
}
