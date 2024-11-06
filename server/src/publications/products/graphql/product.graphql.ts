import { Field, ObjectType, ID, Float, Int, InputType } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

@ObjectType()
export class ProductSchemaGraphQl {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field(() => String)
  title: String;

  @Field(() => Float)
  price: number;

  @Field(() => Float, { nullable: true })
  discount?: number;

  @Field(() => String, { nullable: true })
  details?: String;

  @Field(() => Int)
  quantity: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  updated_at?: Date;

  @Field(() => [Media])
  medias?: Media[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [String], { nullable: true })
  avantages?: String[];

  @Field(() => [Categorie])
  categories?: Categorie[];

  @Field(() => String)
  user_id: String;
}

@ObjectType()
class Categorie {
  @Field(() => String)
  name: String;

  @Field(() => ID, { nullable: true })
  id?: number;
}

@InputType()
class CreateCategorieInput {
  @Field(() => String)
  name: String;

  @Field(() => ID, { nullable: true })
  id?: number;
}

@InputType()
export class CreateProductInput {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field(() => String)
  title: String;

  @Field(() => Float)
  price: number;

  @Field(() => Float, { nullable: true })
  discount?: number;

  @Field(() => String, { nullable: true })
  details?: String;

  @Field(() => Int)
  quantity: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  updated_at?: Date;

  @Field(() => [CreateMediaInput])
  medias?: CreateMediaInput[];

  @Field(() => [CreateCommentInput], { nullable: true })
  comments?: CreateCommentInput[];

  @Field(() => [String], { nullable: true })
  avantages?: String[];

  @Field(() => [CreateCategorieInput])
  categories?: CreateCategorieInput[];

  @Field(() => String)
  user_id: String;
}

@ObjectType()
export class Media {
  @Field(() => String)
  type: string;

  @Field(() => String)
  path: string;
}

@InputType()
export class CreateMediaInput {
  @Field(() => String)
  type: string;

  @Field(() => String)
  path: string;
}

@ObjectType()
export class Comment {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  comment: string;

  @Field(() => Media)
  media: Media;
}

@InputType()
export class CreateCommentInput {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  comment: string;

  @Field(() => CreateMediaInput)
  media: CreateMediaInput;
}
