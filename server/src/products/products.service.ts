import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepositoryPostgresql } from './repositories/product.repository.postgresql';
// import { InjectModel } from '@nestjs/mongoose';
import { ProductRepositoryMongoDB } from './repositories/product.repository.mongodb';
import { Args } from '@nestjs/graphql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product.graphql';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepositoryPostgresql)
    @InjectRepository(ProductRepositoryMongoDB)
    private productRepositoryMongoDB: ProductRepositoryMongoDB,
    private productRepositoryPostgresql: ProductRepositoryPostgresql,
  ) {}

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    // console.log(data);

    return createProductInput;
  }
}
