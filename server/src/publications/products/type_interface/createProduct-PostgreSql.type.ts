import { UserEntity } from 'src/auth/models/user.entity';

export type CreateProductPostgreSql = {
  id?: number;

  title: String;

  created_at?: Date;

  updated_at?: Date;

  price: number;

  discount: number;

  quantity: number;

  views?: number;

  user_name_id: UserEntity;

  discutable?: boolean;
};
