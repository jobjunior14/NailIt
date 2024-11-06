import { UserEntity } from 'src/auth/models/user.entity';

type media = {
  type: string;
  path: string;
};

type comment = {
  user_name_id: string;
  comment: string;
  media: media;
};

export interface createProductMongoDb {
  product_id: number;
  avantages?: String[];
  detail?: String;
  medias: media[];
}
