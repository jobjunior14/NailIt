import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HasLinksEntity } from '../models/hasLink.entity';

@Injectable()
export class HasLinksRepository extends Repository<HasLinksEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(HasLinksEntity)
    private readonly hasLinkRepository: Repository<HasLinksEntity>,
  ) {
    super(
      hasLinkRepository.target,
      hasLinkRepository.manager,
      hasLinkRepository.queryRunner,
    );
  }
}
