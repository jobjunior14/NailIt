import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';
import { SignInInterface } from './interfaces/singIn-return.interface';
import { AuthGuard } from '@nestjs/passport';
import { UpdatePasswordDto } from './dto/updatePassword.dto';

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

  @Post('updatePassword/:id')
  @UseGuards(AuthGuard())
  updatePassword(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updatePassword: UpdatePasswordDto,
  ): Promise<string> {
    return this.authService.updatePassword(id, updatePassword);
  }
}
