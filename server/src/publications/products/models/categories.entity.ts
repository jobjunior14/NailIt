import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ProductsCategoriesEntity } from './productCategories.entity';

@Entity('categories')
@Unique(['name', 'id'])
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: String;

  @OneToMany(
    () => ProductsCategoriesEntity,
    (productsCategories) => productsCategories.category_id,
  )
  productsCategories: ProductsCategoriesEntity[];
}
