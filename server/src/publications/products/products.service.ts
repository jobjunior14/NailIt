import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepositoryPostgresql } from './repositories/product.repository.postgresql';
import {
  CreateProductInput,
  ProductSchemaGraphQl,
} from './graphql/product-create.graphql';
import { deletingFile } from 'src/utils/deletingFile';
import { createProductMongoDb } from './type_interface/createProduct-MongoDB.interface';
import { CreateProductPostgreSql } from './type_interface/createProduct-PostgreSql.type';
import { CategoriesRepository } from './repositories/categories.repository';
import { ProductsCategoriesRepository } from './repositories/productCategories.repository';
import { CategoriesEntity } from './models/categories.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductSchemaMongoDb } from './models/products.schema';
import { UpdateProductPostgreSqlType } from './type_interface/updateProduct-Postgresql.type';
import { UpdateProductInput } from './graphql/product-update.graphql';
import { UserRepository } from 'src/auth/repositories/user.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(ProductSchemaMongoDb.name)
    @InjectRepository(UserRepository)
    private readonly productModel: Model<ProductSchemaMongoDb>,
    @InjectRepository(ProductRepositoryPostgresql)
    private productRepositoryPostgresql: ProductRepositoryPostgresql,
    private categoriesRepository: CategoriesRepository,
    private productCategoriesRepository: ProductsCategoriesRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    try {
      const user = await this.userRepository.findOne({
        where: { user_name_id: createProductInput.user_name_id },
      });

      //save the category of the uploaded product
      if (createProductInput.categories.length === 0) {
        throw new BadRequestException(
          'A product must belong to at least one category',
        );
      } else {
        //check if category name exist or not and retrieve the id
        for (let i = 0; i < createProductInput.categories.length; i++) {
          if (
            createProductInput.categories[i].name !== '' ||
            createProductInput.categories[i].name !== ' '
          ) {
            const existCategorie = await this.categoriesRepository.findOne({
              where: { name: createProductInput.categories[i].name },
            });

            if (existCategorie) {
              createProductInput.categories[i].id = existCategorie.id;
            } else {
              try {
                const category = new CategoriesEntity();
                category.name = createProductInput.categories[i].name;

                const newCategorie =
                  await this.categoriesRepository.save(category);

                createProductInput.categories[i].id = newCategorie.id;
              } catch (error) {
                throw new InternalServerErrorException(
                  'Ouups an error occured saving the selected category',
                );
              }
            }
          }
        }
      }

      //data in postgresql
      const CreateProductPostgreSql: CreateProductPostgreSql = {
        title: createProductInput.title,
        price: createProductInput.price,
        discount: createProductInput.discount,
        quantity: createProductInput.quantity,
        user_name_id: user,
      };

      const userDataPostGresql = this.productRepositoryPostgresql.create(
        CreateProductPostgreSql,
      );

      // save the current postegresql entity
      const newUserDataPostGresql =
        await this.productRepositoryPostgresql.save(userDataPostGresql);

      //save the product with his categories
      try {
        await this.productCategoriesRepository.createCategoryProduct(
          createProductInput.categories,
          newUserDataPostGresql.id,
        );
      } catch (error) {
        await this.productRepositoryPostgresql.deleteProduct(
          newUserDataPostGresql.id,
        );
        throw new InternalServerErrorException(
          'An error occured while save your product categories',
        );
      }

      //////////data in mongoDb////////////
      const productMongoDbData: createProductMongoDb = {
        product_id: newUserDataPostGresql.id,
        avantages: createProductInput.avantages,
        detail: createProductInput.details,
        medias: createProductInput.medias,
      };

      await this.createProductsDataMongoDB(productMongoDbData);

      return {
        ...createProductInput,
        id: newUserDataPostGresql.id,
        created_at: newUserDataPostGresql.created_at,
      };
    } catch (error) {
      for (let i of createProductInput.medias) {
        // if an error occured, deleting the created files
        deletingFile(i.path);
      }
      throw new InternalServerErrorException(
        'An error occured while creating your publication ',
      );
    }
  }

  async createProductsDataMongoDB(data: createProductMongoDb): Promise<string> {
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

  async updateProductMongo(data: createProductMongoDb): Promise<string> {
    try {
      const product = await this.productModel.findOneAndUpdate(
        { product_id: data.product_id },
        {
          medias: [...data.medias],
          avantages: [...data.avantages],
          detail: data.detail ?? ' ',
        },
        { new: false },
      );

      if (!product) {
        throw new BadRequestException('This products does not exist');
      }

      return 'Data updated';
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occured while saving the details of your product, please try later',
      );
    }
  }

  //////////must update the update user files
  async updateProduct(
    updateProductInput: UpdateProductInput,
  ): Promise<ProductSchemaGraphQl> {
    try {
      //save the category of the upd product
      // if (updateProductInput.categories.length === 0 && updateProductInput.categories.length > 3) {
      //   throw new BadRequestException(
      //     'A product must belong to at least one category or must be inferior to 3',
      //   );
      // } else {
      //   //check if website name exist or not and retrieve the id
      //   for (let i = 0; i < updateProductInput.categories.length; i++) {
      //     if (
      //       updateProductInput.categories[i].name !== '' ||
      //       updateProductInput.categories[i].name !== ' '
      //     ) {
      //       const existCategorie = await this.categoriesRepository.findOne({
      //         where: { name: updateProductInput.categories[i].name },
      //       });

      //       if (existCategorie) {
      //         updateProductInput.categories[i].id = existCategorie.id;
      //       } else {
      //         try {
      //           const category = new CategoriesEntity();
      //           category.name = updateProductInput.categories[i].name;

      //           const newCategorie =
      //             await this.categoriesRepository.save(category);

      //           updateProductInput.categories[i].id = newCategorie.id;
      //         } catch (error) {
      //           throw new InternalServerErrorException(
      //             'Ouups an error occured saving the selected category',
      //           );
      //         }
      //       }
      //     }
      //   }
      // }

      //data in postgresql
      const updateProductPostgreSql: UpdateProductPostgreSqlType = {
        id: updateProductInput.id,
        created_at: updateProductInput.created_at,
        title: updateProductInput.title,
        price: updateProductInput.price,
        discount: updateProductInput.discount,
        quantity: updateProductInput.quantity,
        updated_at: new Date(),
      };

      await this.productRepositoryPostgresql.updateProduct(
        updateProductPostgreSql,
      );

      //////////data in mongoDb////////////
      const productMongoDbData: createProductMongoDb = {
        product_id: updateProductInput.id,
        avantages: updateProductInput.avantages,
        detail: updateProductInput.details,
        medias: updateProductInput.medias,
      };

      await this.updateProductMongo(productMongoDbData);

      return {
        ...updateProductInput,
        created_at: updateProductInput.created_at,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occured while updating your publication ',
      );
    }
  }
}
