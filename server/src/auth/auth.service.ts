import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { SignUpDto } from './dto/signUp.dto';
import { UserEntity } from './entities/user.entity';
import {
  comparePasswords,
  hashPassword,
  verifyPasswordAndPasswordConfirm,
} from './utils/password.util';
import { SignInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import { SignInInterface } from './interfaces_and_types/singIn-return.interface';
import { JwtPayloadInterface } from './interfaces_and_types/jwt-interface.payload.interface';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { passwordType } from './interfaces_and_types/password.type';
import { ResetPassworWithSecretAnswerdDto } from './dto/reset-passwordWithSercreAnswer.dto';
import { normalizeName } from './utils/normalizeName.util';
import { updateUserDto } from './dto/updateUser.dto';
import { WebsiteEntity } from './entities/website.entiy';
import { HasLinksEntity } from './entities/hasLink.entity';
import { WebsiteRepository } from './repositories/website.repository';
import { localisationType } from './interfaces_and_types/localisation.type';
import { EmailDto } from './dto/email.dto';
import { MailService } from 'src/mail/mail.service';
import * as crypto from 'crypto';
import { ResetPasswordDto } from './dto/reset-password.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    @InjectRepository(WebsiteEntity)
    @InjectRepository(HasLinksEntity)
    private userRepository: UserRepository,
    private websiteRepository: WebsiteRepository,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async signUp(user_data: SignUpDto): Promise<UserEntity> {
    //normalyze the localisation column
    const localisation = `POINT(${user_data.localisation.coordinates[0]} ${user_data.localisation.coordinates[1]})`;

    //verify the confirmation password and the password
    if (
      !verifyPasswordAndPasswordConfirm(
        user_data.password,
        user_data.password_confirm,
      )
    ) {
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );
    }

    //hash the password
    user_data.password = await hashPassword(user_data.password);

    //Normalize name and Prename data
    user_data.name = normalizeName(user_data.name);
    user_data.prename = normalizeName(user_data.prename);

    //hash the secret answer
    user_data.secret_answer = await hashPassword(user_data.secret_answer);

    const createdUser = await this.userRepository.signUp(
      user_data,
      localisation,
    );

    return createdUser;
  }

  async signIn(user_data: SignInDto): Promise<SignInInterface> {
    const user: UserEntity[] = await this.userRepository.SignIn(
      user_data.email,
    );

    if (
      user.length === 0 ||
      !(await comparePasswords(user_data.password, user[0].password))
    ) {
      throw new UnauthorizedException('Wrong mail or password');
    }

    const payLoad: JwtPayloadInterface = { email: user[0].email };
    const token = this.jwtService.sign(payLoad);

    return {
      userData: user,
      token,
    };
  }

  async updatePassword(
    user_name_id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<string> {
    let { new_password } = updatePasswordDto;
    const { old_password, new_password_confirm } = updatePasswordDto;

    if (new_password_confirm !== new_password)
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );

    const user_password: passwordType[] =
      await this.userRepository.getUserPasswordById(user_name_id);

    if (user_password.length === 0) {
      throw new BadRequestException(
        `no user with this user name ${user_name_id}`,
      );
    }

    if (!(await comparePasswords(old_password, user_password[0].password)))
      throw new UnauthorizedException('Wrong old password');

    //call the function to save the new hashed password with the timestanmp

    const update_password_time_stamp = new Date();
    new_password = await hashPassword(new_password);

    return await this.userRepository.updatePassword(
      user_name_id,
      new_password,
      update_password_time_stamp,
    );
  }

  async resetPasswordWithSecretAnswer(
    user_data: ResetPassworWithSecretAnswerdDto,
  ): Promise<string> {
    const { new_password_confirm, email, secret_answer, new_password } =
      user_data;

    if (new_password !== new_password_confirm)
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user)
      throw new BadRequestException(
        `There is no user with this email ${email}`,
      );

    if (!comparePasswords(secret_answer, user.secret_answer))
      throw new UnauthorizedException('Wrong secret answer');

    user_data.new_password = await hashPassword(new_password);

    return await this.userRepository.resetPasswordWithSecretAnswer(user_data);
  }

  async updateUser(
    user_data: updateUserDto,
    currentUserName: string,
  ): Promise<string> {
    //see if the user with the user_name provided is exist
    const { user_name_id } = user_data;
    if (user_name_id != currentUserName) {
      const user = await this.userRepository.findOne({
        where: { user_name_id },
      });

      if (user)
        throw new ConflictException(
          `You can not pick this user name ${user_name_id} because it already exist`,
        );
    }

    //normalize the localisation point
    const localisation = `POINT(${user_data.localisation.coordinates[0]} ${user_data.localisation.coordinates[1]})`;
    //normalize names
    user_data.name = normalizeName(user_data.name);
    user_data.prename = normalizeName(user_data.name);
    user_data.localisation = localisation as unknown as localisationType;

    if (user_data.websites) {
      //check if website name exist or not and retrieve the id
      for (let i = 0; i < user_data.websites.length; i++) {
        const websiteName = await this.websiteRepository.findOne({
          where: { name: user_data.websites[i].name },
        });

        if (websiteName) {
          user_data.websites[i].id = websiteName.id;
        } else {
          try {
            const websiteName = new WebsiteEntity();
            websiteName.name = user_data.websites[i].name;

            const newWebsiteName =
              await this.websiteRepository.save(websiteName);

            user_data.websites[i].id = newWebsiteName.id;
          } catch (error) {
            throw new InternalServerErrorException(
              'Ouups an error occured saving the website name',
            );
          }
        }
      }
    }
    return await this.userRepository.updateUser(user_data, currentUserName);
  }

  async forgetPassword(email: EmailDto): Promise<string> {
    const user = await this.userRepository.findOne({
      where: email,
    });

    if (!user)
      throw new BadRequestException(
        `There is no user with this email ${email}`,
      );

    const resetToken = user.createPasswordResetToken();

    // save the current entity in the database
    user.save();

    const resetUrl = `http://localhost:3000/auth/resetPassword/$${resetToken}`; //to modify

    console.log(resetUrl);

    const message = `Forget password?  Please provide your new password to: ${resetUrl}.\n Thanks to do not share the link and your new password 
    <b>and if you didn't forget your password ignore this email</b>.`;

    // try {
    //   await this.mailService.sendMail({
    //     to: user.email,
    //     subject: 'Your password reset link (VALID FOR 10 MIN) ',
    //     message: 'Try to not share this link',
    //     html: message,
    //   });
    // } catch (error) {
    //   (user.password_reset_expires = null), (user.password_resetToken = null);

    //   await user.save();

    //   throw new InternalServerErrorException(
    //     'There was an error sending the Email. Try Again Later!',
    //   );
    // }

    return 'Email for reset password, was sent succefully';
  }

  async resetPassword(resetToken: string, user_data: ResetPasswordDto) {
    //get the user token based on the reset token in the param url

    const password_resetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const user = await this.userRepository.findOne({
      where: { password_resetToken: password_resetToken },
    });

    // console.log(user/);
    // console.log(password_resetToken, '2');
    console.log(
      crypto
        .createHash('sha256')
        .update(
          '$88b8615d2073833dba1ea34cdf3e87830f107cba18be2165ceff0611f2aed05d',
        )
        .digest('hex'),
    );

    if (!user && Number(user.password_reset_expires) > Date.now()) {
      throw new BadRequestException(
        'There is no user belong to this token or this token has expired',
      );
    }

    if (user_data.new_password !== user_data.new_password_confirm)
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );

    try {
      user.password = await hashPassword(user_data.new_password);
      user.password_reset_expires = null;
      user.password_resetToken = null;
      user.password_updated_at = new Date();
      await user.save();
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occured when updating your password, please try later',
      );
    }

    return 'Password updated';
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
