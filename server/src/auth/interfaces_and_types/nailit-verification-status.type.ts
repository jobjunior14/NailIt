import { registerEnumType } from '@nestjs/graphql';

export enum NailitVerificationStatus {
  NOT_VERIFIED = 'not_verified',
  VERIFIED = 'verified',
  PENDING = 'pending',
}

registerEnumType(NailitVerificationStatus, {
  name: 'NailitVerificationStatus',
});
