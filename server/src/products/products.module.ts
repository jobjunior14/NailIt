import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { ProductSchema, ProductSchemaMongoDb } from './models/products.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRepositoryMongoDB } from './repositories/product.repository.mongodb';
import { ProductRepositoryPostgresql } from './repositories/product.repository.postgresql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './models/products.entity';
import { CategoriesEntity } from 'src/categories/categories.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: ProductSchema }]),
    TypeOrmModule.forFeature([ProductEntity, CategoriesEntity]),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    ProductRepositoryMongoDB,
    ProductRepositoryPostgresql,
  ],
})
export class ProductsModule {}
