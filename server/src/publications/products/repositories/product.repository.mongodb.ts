import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchemaMongoDb } from '../models/products.schema';
import { CreateProductInput } from '../graphql/product.graphql';
import { createProductMongoDbDto } from '../dto/createProduct-MongoDB.dto';

@Injectable()
export class ProductRepositoryMongoDB {
  constructor(
    @InjectModel('products')
    private readonly productModel: Model<ProductSchemaMongoDb>,
  ) {}

  async createProductsData(data: createProductMongoDbDto) {
    const existingData = await this.productModel.findOne({
      product_id: data.product_id,
    });

    if (existingData) {
      throw new BadRequestException(
        'You can not  create the same product twice',
      );
    } else {
      const newProductData = new this.productModel(data);

      (await newProductData).save();
    }
  }
}
