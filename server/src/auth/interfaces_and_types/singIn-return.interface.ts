import { UserEntity } from '../models/user.entity';
export interface SignInInterface {
  userData: UserEntity[];
  token: string;
}
