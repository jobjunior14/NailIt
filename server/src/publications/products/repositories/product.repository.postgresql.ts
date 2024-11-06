import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../models/products.entity';

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
}
