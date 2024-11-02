import {
  Body,
  Controller,
  Param,
  Patch,
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
import { ResetPassworWithSecretAnswerdDto } from './dto/reset-passwordWithSercreAnswer.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { EmailDto } from './dto/email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
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

  @Patch('updatePassword/:userName')
  @UseGuards(AuthGuard())
  updatePassword(
    @Param('userName') user_name_id: string,
    @Body(ValidationPipe) updatePassword: UpdatePasswordDto,
  ): Promise<string> {
    return this.authService.updatePassword(user_name_id, updatePassword);
  }

  @Patch('resetPasswordWithSecretAnswer')
  resetPasswordWithSecretAnswer(
    @Body(ValidationPipe) user_data: ResetPassworWithSecretAnswerdDto,
  ): Promise<string> {
    return this.authService.resetPasswordWithSecretAnswer(user_data);
  }

  @Patch('updateUser/:userName')
  @UseGuards(AuthGuard('jwt'))
  updateUser(
    @Body(ValidationPipe) user_data: updateUserDto,
    @Param('userName') currentUserName: string,
  ): Promise<string> {
    return this.authService.updateUser(user_data, currentUserName);
  }

  @Post('forgetPassword')
  forgetPassword(@Body(ValidationPipe) email: EmailDto): Promise<string> {
    return this.authService.forgetPassword(email);
  }

  @Patch('resetPassword/:resetToken')
  resetPassword(
    @Param('resetToken') resetToken: string,
    @Body(ValidationPipe) user_data: ResetPasswordDto,
  ): Promise<string> {
    return this.authService.resetPassword(resetToken, user_data);
  }
}
