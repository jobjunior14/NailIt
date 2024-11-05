import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { ProductEntity } from './products.entity';
import { CategoriesEntity } from 'src/publications/products/models/categories.entity';

@Entity('products_categories')
export class ProductsCategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (product) => product.categories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: ProductEntity;

  @ManyToOne(
    () => CategoriesEntity,
    (category) => category.productsCategories,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: CategoriesEntity;
}
