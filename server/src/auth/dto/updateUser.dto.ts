import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { localisationType } from '../interfaces_and_types/localisation.type';
import { websiteInterface } from '../interfaces_and_types/website.interface';

export class updateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  user_name_id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  prename: string;

  // @IsNotEmpty()
  // @IsEmail()
  // @IsString()
  // email: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(16)
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  localisation: localisationType;

  about: string;

  websites: websiteInterface[] | null;
}
