import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HasLinks } from '../entities/hasLink.entity';

@Injectable()
export class hasLinksRepository extends Repository<HasLinks> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(HasLinks)
    private readonly websiteRepository: Repository<HasLinks>,
  ) {
    super(
      websiteRepository.target,
      websiteRepository.manager,
      websiteRepository.queryRunner,
    );
  }
}
