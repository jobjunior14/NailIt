import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { HasLinksEntity } from './hasLink.entity';

@Entity('websites')
@Unique(['name'])
export class WebsiteEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => HasLinksEntity, (hasLink) => hasLink.website)
  links: HasLinksEntity;
}
