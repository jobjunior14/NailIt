import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class DeleteProductInput {
  @Field(() => Int)
  product_id: number;
}
