import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './models/user.entity';
import UserSchema from './graphql/user.schema';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt.strategy';
// import { Auth } from './jwt.strategy';
@Resolver(() => UserSchema)
export class UserResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserSchema])
  async getAllUsers(): Promise<UserEntity[]> {
    return this.authService.getAllUsers();
  }
}
