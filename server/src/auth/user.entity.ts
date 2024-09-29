import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('users')
@Unique(['user_name', 'email', 'phone_number'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  secret_question: string;

  @Column()
  secret_answer: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  password_updated_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  email_updated_at: Date | null;

  async changePasswordAfterIsued(JWTTimestamp: number): Promise<boolean> {
    if (this.password_updated_at) {
      const changeTimeStamp = Math.floor(
        this.password_updated_at.getTime() / 1000,
      );

      console.log(JWTTimestamp, changeTimeStamp);
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
}
