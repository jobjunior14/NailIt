import { User } from '../entities/user.entity';
export interface SignInInterface {
  userData: User[];
  token: string;
}
