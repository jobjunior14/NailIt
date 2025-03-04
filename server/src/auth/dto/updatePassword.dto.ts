import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  old_password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password too weak' },
  )
  new_password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password too weak' },
  )
  new_password_confirm: string;
}
