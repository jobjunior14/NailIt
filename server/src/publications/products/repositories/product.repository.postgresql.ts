import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../models/products.entity';

@Injectable()
export class ProductRepositoryPostgresql extends Repository<ProductEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(ProductEntity)
    private readonly ProductRepository: Repository<ProductEntity>,
  ) {
    super(
      ProductRepository.target,
      ProductRepository.manager,
      ProductRepository.queryRunner,
    );
  }
}
