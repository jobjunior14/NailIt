type media = {
  type: string;
  path: string;
};

type comment = {
  user_id: string;
  comment: string;
  media: media;
};

export interface createProductMongoDbDto {
  product_id: number;
  avantages?: String[];
  detail?: String;
  medias: media[];
  comments: comment[];
}
