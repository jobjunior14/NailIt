import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product.graphql';
import { ProductsService } from './products.service';
import { ProductEntity } from './models/products.entity';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Mutation(() => ProductSchemaGraphQl)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    return this.productService.createProduct(createProductInput);
    // console.log(createProductInput);

    return createProductInput;
  }
}
