import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsCategoriesEntity } from '../models/productCategories.entity';
import { productCategoriesType } from '../type_interface/productCategories.type';
@Injectable()
export class ProductsCategoriesRepository extends Repository<ProductsCategoriesEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ProductsCategoriesEntity)
    private readonly productCategoriesRepository: Repository<ProductsCategoriesEntity>,
  ) {
    super(
      productCategoriesRepository.target,
      productCategoriesRepository.manager,
      productCategoriesRepository.queryRunner,
    );
  }

  async createCategoryProduct(
    categories: productCategoriesType[],
    product_id: number,
  ): Promise<string> {
    try {
      for (let i of categories) {
        const query =
          'INSERT INTO products_categories (product_id, category_id) VALUES ($1, $2)';

        await this.productCategoriesRepository.query(query, [product_id, i.id]);
      }

      return 'product with the belong categie created';
    } catch (error) {
      throw new InternalServerErrorException(
        'Oupps an error occured while creating a product',
      );
    }
  }
}
