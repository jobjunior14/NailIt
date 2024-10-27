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
import { HasLinks } from './hasLink.entity';
@Entity('users')
@Unique(['phone_number'])
@Unique(['email'])
@Check(`"premium_subscription_expire_at" > NOW()`)
@Check(`"balance" >= 0`)
export class User extends BaseEntity {
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
    enum: ['not_verified', 'verified', 'pending'],
    default: 'not_verified',
    nullable: false,
  })
  nailit_verification: 'not_verified' | 'verified' | 'pending';

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

  @OneToMany(() => HasLinks, (hasLinks) => hasLinks.user)
  links: HasLinks[];

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
}
