import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
  telephone_number: string;

  @Column()
  secret_question: string;

  @Column()
  secret_answer: string;
}
