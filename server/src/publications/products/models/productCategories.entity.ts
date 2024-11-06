import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  Unique,
} from 'typeorm';
import { ProductEntity } from './products.entity';
import { CategoriesEntity } from './categories.entity';
@Entity('products_categories')
@Unique(['category_id', 'product_id'])
export class ProductsCategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (product) => product.categories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product_id: ProductEntity;

  @ManyToOne(
    () => CategoriesEntity,
    (category) => category.productsCategories,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category_id: CategoriesEntity;
}
