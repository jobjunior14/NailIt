import { User } from '../user.entity';
export interface SignInInterface {
  userData: User[];
  token: string;
}
