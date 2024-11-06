import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product.graphql';
import { ProductsService } from './products.service';
import {
  BadRequestException,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';
import { checkFileExists } from 'src/utils/checkFileExists';

@UseGuards(JwtAuthGuard)
@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => ProductSchemaGraphQl)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    if (createProductInput.medias.length === 0) {
      throw new BadRequestException('No file uploaded');
    } else {
      for (let i of createProductInput.medias) {
        if (checkFileExists(i.path)) {
          throw new InternalServerErrorException(
            "there was an error while uploading your files, it'is always exist",
          );
        }
      }
    }

    return this.productService.createProduct(createProductInput);
  }
}
