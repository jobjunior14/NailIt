import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Website } from '../entities/website.entiy';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WebsiteRepository extends Repository<Website> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Website)
    private readonly websiteRepository: Repository<Website>,
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
