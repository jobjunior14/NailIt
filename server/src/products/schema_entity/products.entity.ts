import { UserEntity } from 'src/auth/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  BaseEntity,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { CategoriesEntity } from 'src/categories/categories.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 255 })
  title: string;

  @CreateDateColumn({ type: 'timestamptz', default: 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: Date;

  @Column({ type: 'decimal', precision: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 2 })
  discount: number;

  @Column({ type: 'smallint', nullable: true })
  quantity: number;

  @Column({ type: 'int', default: 0 })
  views: number;

  @ManyToOne(() => UserEntity, (users) => users.products)
  users: UserEntity[];

  @ManyToMany(() => CategoriesEntity, (category) => category.products)
  @JoinTable({ name: 'products_categories' })
  categories: CategoriesEntity[];
}
