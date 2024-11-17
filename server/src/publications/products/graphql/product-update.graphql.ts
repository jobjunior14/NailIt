import { Field, ID, Float, Int, InputType } from '@nestjs/graphql';
import { CreateMediaInput } from './media.graphql';
import { CreateCategorieInput } from './product-create.graphql';
@InputType()
export class UpdateProductInput {
  @Field(() => ID)
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

  @Field(() => Date)
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  updated_at?: Date;

  @Field(() => [CreateMediaInput])
  medias: CreateMediaInput[];

  @Field(() => [String], { nullable: true })
  avantages?: String[];

  //for now this cannot be updated
  @Field(() => [CreateCategorieInput], { nullable: true })
  categories?: CreateCategorieInput[];

  @Field(() => String)
  user_name_id: String;
}
