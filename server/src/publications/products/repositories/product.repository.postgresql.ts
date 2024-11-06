import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../models/products.entity';
import { UpdateProductPostgreSqlType } from '../type_interface/updateProduct-Postgresql.type';

@Injectable()
export class ProductRepositoryPostgresql extends Repository<ProductEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {
    super(
      productRepository.target,
      productRepository.manager,
      productRepository.queryRunner,
    );
  }

  async deleteProduct(id: number): Promise<string> {
    try {
      await this.productRepository.query('DELETE FROM products WHERE id = $1', [
        id,
      ]);

      return 'product deleted';
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occured while deleting the product with id ${id}`,
      );
    }
  }

  async updateProduct(data: UpdateProductPostgreSqlType): Promise<string> {
    try {
      const query =
        'UPDATE products SET title = $1, price = $2, discount = $3, quantity = $4, updated_at = $5 WHERE id = $6';

      await this.productRepository.query(query, [
        data.title,
        data.price,
        data.discount,
        data.quantity,
        data.updated_at,
        data.id,
      ]);

      return 'data updated';
    } catch (error) {
      throw new InternalServerErrorException(
        'there was an error while updating your product',
      );
    }
  }
}
