import { UserEntity } from '../entities/user.entity';
export interface SignInInterface {
  userData: UserEntity[];
  token: string;
}
