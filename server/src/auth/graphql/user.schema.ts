import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NailitVerificationStatus } from '../interfaces_and_types/nailit-verification-status.type';

@ObjectType()
export default class UserSchema {
  @Field(() => ID)
  user_name_id: string;

  @Field()
  name: string;

  @Field()
  prename: string;

  @Field()
  about: string;

  @Field(() => NailitVerificationStatus)
  nailit_verification: NailitVerificationStatus;

  @Field()
  country: string;

  @Field()
  city: string;

  @Field()
  localisation: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;

  @Field()
  phone_number: string;

  @Field()
  password: string;

  @Field()
  secret_word: string;

  @Field()
  secret_answer: string;

  @Field()
  email: string;

  @Field(() => Boolean)
  premium_subscription: boolean;

  @Field(() => Date)
  premium_subscription_expire_at: Date;

  @Field()
  balance: number;

  @Field(() => Boolean)
  active: boolean;

  @Field(() => Date)
  password_updated_at: Date | null;

  @Field(() => Date)
  email_updated_at: Date | null;

  @Field(() => Date)
  secret_answer_updated_at: Date | null;
}
