import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { ProductSchema, ProductSchemaMongoDb } from './models/products.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepositoryMongoDB } from './repositories/product.repository.mongodb';
import { ProductRepositoryPostgresql } from './repositories/product.repository.postgresql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/products.entity';
import { ProductsController } from './products.controller';
import { ProductsCategoriesEntity } from './models/productCategories.entity';
import { CategoriesEntity } from './models/categories.entity';
import { CategoriesRepository } from './repositories/categories.repository';
import { ProductsCategoriesRepository } from './repositories/productCategories.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProductSchemaMongoDb.name,
        schema: ProductSchema,
        collection: 'products',
      },
    ]),
    TypeOrmModule.forFeature([
      ProductEntity,
      CategoriesEntity,
      ProductsCategoriesEntity,
    ]),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    ProductRepositoryMongoDB,
    ProductRepositoryPostgresql,
    CategoriesRepository,
    ProductsCategoriesRepository,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
