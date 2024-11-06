import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMediaInput {
  @Field(() => String)
  type: string;

  @Field(() => String)
  path: string;
}
