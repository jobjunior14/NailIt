import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';
import { SignInInterface } from './interfaces_and_types/singIn-return.interface';
import { AuthGuard } from '@nestjs/passport';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

interface jobJuniir {
  i: string;
}
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body(ValidationPipe) signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('signIn')
  signIn(@Body(ValidationPipe) user_data: SignInDto): Promise<SignInInterface> {
    return this.authService.signIn(user_data);
  }

  @Post('updatePassword/:userName')
  @UseGuards(AuthGuard())
  updatePassword(
    @Param('userName') user_name_id: string,
    @Body(ValidationPipe) updatePassword: UpdatePasswordDto,
  ): Promise<string> {
    return this.authService.updatePassword(user_name_id, updatePassword);
  }

  @Post('resetPasswordWithSecretAnswer')
  resetPasswordWithSecretAnswer(
    @Body(ValidationPipe) user_data: ResetPasswordDto,
  ): Promise<string> {
    return this.authService.resetPasswordWithSecretAnswer(user_data);
  }

  // @Post('updateUser/:userName')
  // @UseGuards(AuthGuard())
  // updateUser(
  //   @Body(ValidationPipe) user_data: UpdatePasswordDto,
  // ): Promise<string> {
  //   return
  // }
}
