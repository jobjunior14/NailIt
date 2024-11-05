import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product.graphql';
import { ProductsService } from './products.service';
import { ProductEntity } from './models/products.entity';
import { BadRequestException } from '@nestjs/common';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => ProductSchemaGraphQl)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    if (createProductInput.medias.length === 0) {
      throw new BadRequestException('No file uploaded');
    }
    return this.productService.createProduct(createProductInput);
  }
}
