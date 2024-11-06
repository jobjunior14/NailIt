import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from '../models/categories.entity';
@Injectable()
export class CategoriesRepository extends Repository<CategoriesEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(CategoriesEntity)
    private readonly categoriesRepository: Repository<CategoriesEntity>,
  ) {
    super(
      categoriesRepository.target,
      categoriesRepository.manager,
      categoriesRepository.queryRunner,
    );
  }
}
