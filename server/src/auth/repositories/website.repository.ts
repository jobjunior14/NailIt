import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { WebsiteEntity } from '../models/website.entiy';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WebsiteRepository extends Repository<WebsiteEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(WebsiteEntity)
    private readonly websiteRepository: Repository<WebsiteEntity>,
  ) {
    super(
      websiteRepository.target,
      websiteRepository.manager,
      websiteRepository.queryRunner,
    );
  }

  // async getWebsiteId (name: string): Promise<number> {

  //   try
  // }
}
