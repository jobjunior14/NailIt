import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from './models/user.entity';

export const GetUser = createParamDecorator((data, req): UserEntity => {
  console.log(req);
  return req;
});
