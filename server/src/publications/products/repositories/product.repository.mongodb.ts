import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchemaMongoDb } from '../models/products.schema';
import { createProductMongoDb } from '../type_interface/createProduct-MongoDB.interface';

@Injectable()
export class ProductRepositoryMongoDB {
  constructor(
    @InjectModel(ProductSchemaMongoDb.name)
    private readonly productModel: Model<ProductSchemaMongoDb>,
  ) {}

  async createProductsData(data: createProductMongoDb): Promise<string> {
    try {
      const existingData = await this.productModel.findOne({
        product_id: data.product_id,
      });

      if (existingData) {
        throw new BadRequestException(
          'You can not  create the same product twice',
        );
      } else {
        const newProductData = await this.productModel.create({
          product_id: data.product_id,
          medias: [...data.medias],
          avantages: [...data.avantages],
          detail: data.detail ?? ' ',
        });

        newProductData.save();

        return 'product details saved';
      }
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occured while save the details of your products',
      );
    }
  }
}
