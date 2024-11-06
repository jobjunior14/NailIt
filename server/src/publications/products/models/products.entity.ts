import { UserEntity } from 'src/auth/models/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  BaseEntity,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductsCategoriesEntity } from './productCategories.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 255 })
  title: String;

  @CreateDateColumn({ type: 'timestamptz', default: 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: Date;

  @Column({ type: 'decimal', precision: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 2, nullable: true })
  discount: number;

  @Column({ type: 'smallint', nullable: true })
  quantity: number;

  @Column({ type: 'int', default: 0 })
  views: number;

  @ManyToOne(() => UserEntity, (users) => users.products)
  @JoinColumn({ name: 'user_id' })
  users: UserEntity[];

  @OneToMany(
    () => ProductsCategoriesEntity,
    (productsCategoriesEntity) => productsCategoriesEntity.product,
  )
  categories: ProductsCategoriesEntity[];
}
