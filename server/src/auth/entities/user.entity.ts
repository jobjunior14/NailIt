import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  Check,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import * as crypto from 'crypto';
import { HasLinksEntity } from './hasLink.entity';
import { NailitVerificationStatus } from '../interfaces_and_types/nailit-verification-status.type';
@Entity('users')
@Unique(['phone_number'])
@Unique(['email'])
@Check(`"premium_subscription_expire_at" > NOW()`)
@Check(`"balance" >= 0`)
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  user_name_id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  prename: string;

  @Column({ type: 'text', default: ' ' })
  about: string;

  @Column({
    type: 'enum',
    enum: NailitVerificationStatus,
    default: NailitVerificationStatus.NOT_VERIFIED,
  })
  nailit_verification: NailitVerificationStatus;

  @Column({ type: 'varchar', length: 40, nullable: false })
  country: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  city: string;

  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: false,
  })
  localisation: string;

  @CreateDateColumn({ type: 'timestamptz', default: 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: Date;

  @Column({ type: 'varchar', length: 15, nullable: false, unique: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  secret_word: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  secret_answer: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: 'boolean', default: false })
  premium_subscription: boolean;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  premium_subscription_expire_at: Date;

  @Column({ type: 'numeric', precision: 15, scale: 3, default: 0 })
  balance: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', nullable: true })
  password_updated_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  email_updated_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  secret_answer_updated_at: Date | null;

  @OneToMany(() => HasLinksEntity, (hasLinks) => hasLinks.user)
  links: HasLinksEntity[];

  @Column({ type: 'varchar', length: 250, nullable: true })
  password_resetToken: string | null;

  @Column({ type: 'varchar', length: 15, nullable: true })
  password_reset_expires: string | null;

  async changePasswordAfterIsued(JWTTimestamp: number): Promise<boolean> {
    if (this.password_updated_at) {
      const changeTimeStamp = Math.floor(
        this.password_updated_at.getTime() / 1000,
      );

      return JWTTimestamp < changeTimeStamp;
    }
    return false;
  }

  async changeEmailAfterIsued(JWTTimestamp: number): Promise<boolean> {
    if (this.email_updated_at) {
      const changeTimeStamp = Math.floor(
        this.email_updated_at.getTime() / 1000,
      );

      return JWTTimestamp < changeTimeStamp;
    }
    return false;
  }

  async changeSecreteAnswer(JWTTimestamp: number): Promise<boolean> {
    if (this.secret_answer_updated_at) {
      const changeTimeStamp = Math.floor(
        this?.secret_answer_updated_at.getTime() / 1000,
      );

      return JWTTimestamp < changeTimeStamp;
    }
    return false;
  }

  createPasswordResetToken(): string {
    const resetToken: string = crypto.randomBytes(32).toString('hex');

    this.password_resetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    this.password_reset_expires = (Date.now() + 10 * 60 * 1000).toString();

    console.log(
      crypto
        .createHash('sha256')
        .update(
          '$88b8615d2073833dba1ea34cdf3e87830f107cba18be2165ceff0611f2aed05d',
        )
        .digest('hex'),
    );
    this.save();

    return resetToken;
  }
}
