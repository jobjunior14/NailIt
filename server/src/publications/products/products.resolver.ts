import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product-create.graphql';
import { ProductsService } from './products.service';
import {
  BadRequestException,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';
import { checkFileExists } from 'src/utils/checkFileExists';
import { UpdateProductInput } from './graphql/product-update.graphql';
@UseGuards(JwtAuthGuard)
@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  //create a product publication
  @Mutation(() => ProductSchemaGraphQl)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    if (createProductInput.medias.length === 0) {
      throw new BadRequestException('No file uploaded');
    } else {
      for (let i of createProductInput.medias) {
        if (!checkFileExists(i.path)) {
          throw new InternalServerErrorException(
            'there was an error while uploading your files',
          );
        }
      }
    }

    return this.productService.createProduct(createProductInput);
  }

  //update the product publication
  @Mutation(() => ProductSchemaGraphQl)
  async updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    if (updateProductInput.medias.length === 0) {
      throw new BadRequestException('No file uploaded');
    }

    return this.productService.updateProduct(updateProductInput);
  }
}
