import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HasLinks } from '../entities/hasLink.entity';

@Injectable()
export class HasLinksRepository extends Repository<HasLinks> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(HasLinks)
    private readonly hasLinkRepository: Repository<HasLinks>,
  ) {
    super(
      hasLinkRepository.target,
      hasLinkRepository.manager,
      hasLinkRepository.queryRunner,
    );
  }
}
