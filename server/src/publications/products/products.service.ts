import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepositoryPostgresql } from './repositories/product.repository.postgresql';
import fs from 'fs';
import { ProductRepositoryMongoDB } from './repositories/product.repository.mongodb';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product.graphql';
import { createProductMongoDbDto } from './dto/createProduct-MongoDB.dto';
import { deletingFile } from 'src/utils/checkFileExists';
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
    try {
      //data in postgresql
      const userDataPostGresql =
        this.productRepositoryPostgresql.create(createProductInput);

      // save the current entity
      this.productRepositoryPostgresql.save(userDataPostGresql);

      //data in mongoDb

      const productMongoDbData: createProductMongoDbDto = {
        product_id: userDataPostGresql.id,
        avantages: createProductInput.avantages,
        detail: createProductInput.details,
        medias: createProductInput.medias,
        comments: createProductInput.comments,
      };
      const userDataMongoDB =
        this.productRepositoryMongoDB.createProductsData(productMongoDbData);
    } catch (error) {
      for (let i of createProductInput.medias) {
        //if an error occured, deleting the created files
        deletingFile(i.path);
      }
      throw new InternalServerErrorException(
        'An error occured while creating your publication ',
      );
    }

    return createProductInput;
  }
}
