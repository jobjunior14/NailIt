import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchemaMongoDb } from '../models/products.schema';

@Injectable()
export class ProductRepositoryMongoDB {
  constructor(
    @InjectModel('products')
    private readonly ProductModel: Model<ProductSchemaMongoDb>,
  ) {}
}
