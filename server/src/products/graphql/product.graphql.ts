import { Field, ObjectType, ID, Float, Int, InputType } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import { FileUpload } from '../type_interface/fileupload.interface';

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

  @Field(() => [CreateMediaInput], { nullable: true })
  medias: CreateMediaInput[];

  @Field(() => [CreateCommentInput], { nullable: true })
  comments?: CreateCommentInput[];

  @Field(() => [String], { nullable: true })
  avantages?: String[];
}

@ObjectType()
export class Media {
  @Field(() => String)
  type: string;

  @Field(() => String)
  url: string;
}

@InputType()
export class CreateMediaInput {
  @Field(() => String)
  type: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class Comment {
  @Field(() => String)
  user_id: string;

  @Field(() => String)
  comment: string;
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
